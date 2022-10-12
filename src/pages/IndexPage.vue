<template>
  <q-page padding>
    <div class="q-pt-md">
      <div class="row q-pb-sm">
        <div class="col q-pr-xs">
          <q-input
            outlined
            dense
            v-model="videoUrl"
            label="YouTube Video URL"
          />
        </div>
        <div class="col-4">
          <q-btn
            class="q-mr-xs"
            outline
            style="height: 100%"
            color="white"
            text-color="black"
            label="Open Video"
            @click="loadVideo"
          />
          <q-btn
            style="height: 100%"
            outline
            color="white"
            text-color="black"
            label="Process"
            @click="test"
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
          <q-scroll-area style="height: 90%; width: 75%">
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-scroll-area>
        </div>
      </div>
      <div class="row q-pt-md q-gutter-sm">
        <div class="col">
          <div class="text-h5">Topic Summaries</div>
          <q-scroll-area style="height: 375px; width: 85%">
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="q-py-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import YouTube from "vue3-youtube";

const player = ref(null);
const videoUrl = ref("");
const videoId = ref(null);

const onReady = () => {
  if (player.value.$el.src === "") {
    return;
  }

  player.value.playVideo();
};

const loadVideo = () => {
  let m = videoUrl.value.match(/v=(.*)/);
  if (m === null) {
    return;
  }

  videoId.value = m[1];
  player.value.loadVideoById({
    videoId: videoId.value,
    startSeconds: 0,
  });
};
</script>
