<template>
  <q-page padding>
    <div class="q-pt-md">
      <div class="row q-pb-sm">
        <div class="col-5 q-pr-xs">
          <q-input
            outlined
            dense
            v-model="videoUrl"
            label="YouTube Video URL"
          />
        </div>
        <div class="col">
          <q-btn
            class="q-mr-xs"
            outline
            style="height: 100%"
            color="white"
            text-color="black"
            label="Open Video"
            :disable="!videoUrl"
            @click="loadVideo"
          />
          <q-btn
            class="q-mr-xs"
            style="height: 100%"
            outline
            color="white"
            text-color="black"
            label="Process"
            :disable="videoUrl === null"
            @click="processVideo"
          />
          <q-btn
            style="height: 100%"
            outline
            color="white"
            text-color="black"
            label="Get Predictions"
            @click="get_tasks"
          />
        </div>
      </div>
      <div class="row q-gutter-sm">
        <div class="col-5">
          <div class="text-h5">Video</div>
          <YouTube
            id="player"
            ref="player"
            width="100%"
            src=""
            @ready="onReady"
          />
        </div>
        <div class="col q-pr-lg">
          <div class="text-h5">Topics</div>
          <q-scroll-area style="height: 80%; width: 75%">
            <div
              v-for="topic in predictionResults.topics"
              :key="topic.order"
              class="q-py-xs"
              style="display: flex; align-items: center; width: 98%"
            >
              <div
                class="text-primary"
                style="cursor: pointer"
                @click="seekTo(topic.start_seconds)"
              >
                {{ topic.start }}
              </div>
              <q-input
                class="q-pl-sm"
                style="width: 100%"
                square
                outlined
                dense
                v-model="topic.headline"
              />
            </div>
          </q-scroll-area>
        </div>
      </div>
      <div class="row q-pt-md q-gutter-sm">
        <div class="col">
          <q-btn
            class="q-mr-xs"
            style="height: 100%"
            color="primary"
            icon="save"
            text-color="white"
            label="Update Predictions"
            :disable="currentTask === null"
            @click="updatePredictions"
          />
          <q-btn
            class="q-mr-xs"
            style="height: 100%"
            color="red"
            icon="undo"
            text-color="white"
            label="Undo Changes"
            :disable="currentTask === null"
            @click="getResults(currentTask)"
          />

          <q-btn
            class="q-ml-lg"
            style="height: 100%"
            color="secondary"
            text-color="white"
            icon="file_download"
            label="Export Chapter Markers"
            :disable="currentTask === null"
            @click="downloadChapterMarkers"
          />
          <q-btn
            class="q-ml-sm"
            style="height: 100%"
            color="secondary"
            icon="file_download"
            text-color="white"
            label="Export Quarto Blog Post"
            :disable="currentTask === null"
            @click="downloadQuartoFile"
          />
        </div>
      </div>

      <div class="row q-pt-md q-gutter-sm">
        <div class="col">
          <div class="text-h5">Topic Summaries</div>
          <q-scroll-area style="height: 375px; width: 85%">
            <div
              v-for="topic in predictionResults.topics"
              :key="topic.order"
              class="q-py-xs"
              style="align-items: center; width: 98%"
            >
              <div class="text-weight-bolder float-left">
                {{ topic.headline }}
              </div>
              <div
                class="float-left q-pl-sm text-primary"
                style="cursor: pointer"
                @click="seekTo(topic.start_seconds)"
              >
                {{ topic.start }}
              </div>

              <q-input
                class="q-pl-sm"
                style="width: 100%; padding: 0"
                square
                outlined
                dense
                type="textarea"
                v-model="topic.summary"
              />
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </q-page>
  <!-- show tasks modal-->
  <q-dialog v-model="showTasks">
    <q-card style="max-width: 1500px; width: 1000px">
      <q-card-section
        class="row items-center"
        v-for="task in tasks"
        :key="task.id"
      >
        <q-avatar
          :icon="getTaskStatusIcon(task.status)"
          :color="getTaskStatusIconColor(task.status)"
          :alt="task.status"
          :tooltip="task.status"
          text-color="white"
        >
          <q-tooltip>
            {{ task.status }}
          </q-tooltip>
        </q-avatar>
        <span class="q-ml-sm">
          {{ task.video.url }}
          <q-btn
            class="q-ml-sm"
            style="height: 100%"
            color="green"
            icon="visibility"
            text-color="white"
            label="View Results"
            :disable="task.status !== 'completed'"
            @click="getResults(task)"
          />
        </span>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import YouTube from "vue3-youtube";
import { api } from "src/boot/axios";

const $q = useQuasar();

const player = ref(null);
const videoUrl = ref(null);
const videoId = ref(null);

const apiUrl = "http://labs.suva.sh:8080";
const predictionResults = ref({});

const showTasks = ref(false);
const tasks = ref([]);
const currentTask = ref(null);

const getTaskStatusIcon = (status) => {
  if (status === "completed") {
    return "done";
  } else if (status === "failed") {
    return "error";
  } else if (status === "processing") {
    return "directions_run";
  } else {
    return "start";
  }
};

const getTaskStatusIconColor = (status) => {
  if (status === "completed") {
    return "green";
  } else if (status === "failed") {
    return "red";
  } else if (status === "processing") {
    return "yellow";
  } else {
    return "primary";
  }
};

/**
 * YouTube Player controls
 */
const loadVideo = () => {
  // grab the video ID
  let m = videoUrl.value.match(/v=([^&]*)/);
  if (m === null) {
    return;
  }
  videoId.value = m[1];

  // load the video into the player
  player.value.loadVideoById({ videoId: videoId.value, startSeconds: 0 });
  player.value.stopVideo();
};

const seekTo = (seconds) => {
  player.value.seekTo(seconds, true);
};

const onReady = () => {
  if (player.value.$el.src === "") {
    return;
  }
  console.log("here");
  // player.value.playVideo();
};

/**
 * Working with predictions
 */

const processVideo = async () => {
  $q.loading.show();

  try {
    const formData = { url: videoUrl.value };
    const { data: res } = await axios.post(`${apiUrl}/videos`, formData);
    $q.notify({
      type: "positive",
      message: "Video is being processed ...",
    });
  } catch (err) {
    showTasks.value = false;
    $q.notify({
      type: "negative",
      message: err.message || "Could not process video",
    });
  }
  $q.loading.hide();
};

const get_tasks = async () => {
  $q.loading.show();

  try {
    const { data: res } = await axios.get(
      `${apiUrl}/tasks?limit=20&order=desc`
    );
    tasks.value = res;
    showTasks.value = true;
    console.log(tasks.value);
  } catch (err) {
    showTasks.value = false;
    $q.notify({
      type: "negative",
      message: err.message || "Could not get tasks",
    });
  }
  $q.loading.hide();
};

const getResults = async (task) => {
  predictionResults.value = [];
  currentTask.value = task;
  videoUrl.value = task.video.url;

  $q.loading.show();

  try {
    const { data: res } = await axios.get(
      `${apiUrl}/results/${currentTask.value.id}`
    );
    loadVideo();
    predictionResults.value = res;
    showTasks.value = false;
  } catch (err) {
    currentTask.value = null;
    $q.notify({
      type: "negative",
      message: err.message || "Could not get prediction",
    });
  }
  $q.loading.hide();
};

const updatePredictions = async () => {
  $q.loading.show();
  $q.notify({
    type: "positive",
    message: "Predictions updated",
  });
  $q.loading.hide();
};

const downloadChapterMarkers = async () => {
  $q.loading.show();
  $q.notify({
    type: "positive",
    message: "Chapter markers downloaded",
  });
  $q.loading.hide();
};

const downloadQuartoFile = async () => {
  $q.loading.show();
  $q.notify({
    type: "positive",
    message: "Quarto file downloaded",
  });
  $q.loading.hide();
};
</script>
