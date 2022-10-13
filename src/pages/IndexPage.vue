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
            @click="loadVideo"
          />
          <q-btn
            class="q-mr-xs"
            style="height: 100%"
            outline
            color="white"
            text-color="black"
            label="Process"
            @click="test"
          />
          <q-btn
            style="height: 100%"
            outline
            color="white"
            text-color="black"
            label="Predictions"
            @click="getResults"
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
            @click="loadVideo"
          />
          <q-btn
            class="q-mr-xs"
            style="height: 100%"
            color="red"
            icon="undo"
            text-color="white"
            label="Undo Changes"
            @click="test"
          />

          <q-btn
            class="q-ml-lg"
            style="height: 100%"
            color="secondary"
            text-color="white"
            icon="file_download"
            label="Export Chapter Markers"
            @click="getResults"
          />
          <q-btn
            class="q-ml-sm"
            style="height: 100%"
            color="secondary"
            icon="file_download"
            text-color="white"
            label="Export Quarto Blog Post"
            @click="getResults"
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import YouTube from "vue3-youtube";
import { api } from "src/boot/axios";

const $q = useQuasar();

const player = ref(null);
const videoUrl = ref("");
const videoId = ref(null);

const apiUrl = "http://104.171.202.109:8080";
const predictionResults = ref({
  task_id: 1,
  id: 1,
  topics: [
    {
      order: 0,
      start: "00:00:00.000",
      start_seconds: 0,
      headline: "How to solve",
      summary:
        "How to solve equations with a rational term is how to solve equations with a rational term . How to solve equations with a rational term is how to solve equations with a rational term .",
    },
    {
      order: 1,
      start: "00:02:25.000",
      start_seconds: 145,
      headline: "Z over Z",
      summary:
        "Z over Z is going to equal 1 . Then I'm multiply by Z on this side .",
    },
    {
      order: 2,
      start: "00:02:36.000",
      start_seconds: 156,
      headline: "You're",
      summary:
        "You're not multiplying the Z just by the a or the Z just by the b .",
    },
    {
      order: 3,
      start: "00:02:46.000",
      start_seconds: 166,
      headline: "Learn how to",
      summary:
        "Learn how to solve an equation when they ask you for a signal .",
    },
  ],
  transcripts: [
    {
      start: "00:00:00.000",
      end: "00:00:09.000",
      text: " Alright, what I want to tell you guys is how to solve equations with a rational term.",
    },
    {
      start: "00:00:09.000",
      end: "00:00:13.000",
      text: " And what I mean by rational term is you have these two terms and the right advice of,",
    },
    {
      start: "00:00:13.000",
      end: "00:00:15.000",
      text: " so there's your rational term.",
    },
    {
      start: "00:00:15.000",
      end: "00:00:21.000",
      text: " I believe the answer for this one is to solve for Y, correct?",
    },
    {
      start: "00:00:21.000",
      end: "00:00:24.000",
      text: " Whenever I thought...",
    },
    {
      start: "00:00:24.000",
      end: "00:00:28.000",
      text: "...48.",
    },
    {
      start: "00:00:28.000",
      end: "00:00:35.000",
      text: " So, to go ahead and solve this problem, what you want to make sure you're going to do is we need to get that Z off the bottom.",
    },
    {
      start: "00:00:35.000",
      end: "00:00:40.000",
      text: " Alright, and something that's very common to a lot of people they remember how to do is they know this problem.",
    },
    {
      start: "00:00:40.000",
      end: "00:00:41.000",
      text: " 4x equals 8.",
    },
    {
      start: "00:00:41.000",
      end: "00:00:48.000",
      text: " When teaching you how to solve equations, everybody's very familiar with solving this, because you know you do the inverse operation you divide by 4.",
    },
    {
      start: "00:00:48.000",
      end: "00:00:52.000",
      text: " That can't stop to become a Y, you're left with x equals 2.",
    },
    {
      start: "00:00:52.000",
      end: "00:00:59.000",
      text: " However, a problem that we do not work on a lot of you is if you have a problem with this.",
    },
    {
      start: "00:00:59.000",
      end: "00:01:02.000",
      text: " And this is the same thing.",
    },
    {
      start: "00:01:02.000",
      end: "00:01:07.000",
      text: " If here the 4 is multiplied by x, you use the inverse operation which is division.",
    },
    {
      start: "00:01:07.000",
      end: "00:01:12.000",
      text: " Here we have an x divided by 2, so the inverse operation would be multiplied.",
    },
    {
      start: "00:01:12.000",
      end: "00:01:20.000",
      text: " If you have the multiplied by 2 on both sides, those are still cancel out, you left with x is equal to 6.",
    },
    {
      start: "00:01:20.000",
      end: "00:01:24.000",
      text: " Well, here it's the exact same thing. We have a Z on the bottom.",
    },
    {
      start: "00:01:24.000",
      end: "00:01:28.000",
      text: " So, what I need to do, or that Z is the x plus y is divided by Z.",
    },
    {
      start: "00:01:28.000",
      end: "00:01:31.000",
      text: " So, what we need to do is we need to multiply by Z on both sides.",
    },
    {
      start: "00:01:31.000",
      end: "00:01:33.000",
      text: " Now, there's two different ways you can do it.",
    },
    {
      start: "00:01:33.000",
      end: "00:01:36.000",
      text: " You could initially multiply by the Z right now.",
    },
    {
      start: "00:01:36.000",
      end: "00:01:39.000",
      text: " However, what you have to notice is there's two terms on the side.",
    },
    {
      start: "00:01:39.000",
      end: "00:01:42.000",
      text: " There's an x plus y over Z and there's an a.",
    },
    {
      start: "00:01:42.000",
      end: "00:01:49.000",
      text: " So, if you're going to multiply by Z right now, you have to multiply by the Z by the x plus y and the Z by the negative a.",
    },
    {
      start: "00:01:49.000",
      end: "00:01:56.000",
      text: " I'm going to put the a onto the other side and then multiply by the Z.",
    },
    {
      start: "00:01:56.000",
      end: "00:02:01.000",
      text: " It doesn't really matter which way you go, but to me this seems like the easier process.",
    },
    {
      start: "00:02:01.000",
      end: "00:02:06.000",
      text: " So, I'm going to add an a because that's the inverse process of,",
    },
    {
      start: "00:02:06.000",
      end: "00:02:11.000",
      text: " sorry, that's the inverse operation that a is subtracted from our variable we're trying to solve for.",
    },
    {
      start: "00:02:11.000",
      end: "00:02:14.000",
      text: " So, I'm going to add a, that's going to cancel out and become zero.",
    },
    {
      start: "00:02:14.000",
      end: "00:02:21.000",
      text: " So, that's from x plus y over Z equals b plus a.",
    },
    {
      start: "00:02:21.000",
      end: "00:02:25.000",
      text: " Now, I'm going to go ahead and multiply by my Z.",
    },
    {
      start: "00:02:25.000",
      end: "00:02:29.000",
      text: " And what I notice is just like over here, 4 over 4 equals 1.",
    },
    {
      start: "00:02:29.000",
      end: "00:02:32.000",
      text: " Z over Z is going to equal 1.",
    },
    {
      start: "00:02:32.000",
      end: "00:02:34.000",
      text: " So, they really can't allow us.",
    },
    {
      start: "00:02:34.000",
      end: "00:02:36.000",
      text: " Then I'm multiply by Z on this side.",
    },
    {
      start: "00:02:36.000",
      end: "00:02:40.000",
      text: " Again, we have to be careful though, when we multiply, when we show that we're multiplying Z on the side,",
    },
    {
      start: "00:02:40.000",
      end: "00:02:43.000",
      text: " we have to notice that there's two different terms.",
    },
    {
      start: "00:02:43.000",
      end: "00:02:46.000",
      text: " So, you're not multiplying the Z just by the a or the Z just by the b,",
    },
    {
      start: "00:02:46.000",
      end: "00:02:52.000",
      text: " but we have to put parentheses around that b or a to show that we're multiplying that Z times b",
    },
    {
      start: "00:02:52.000",
      end: "00:02:56.000",
      text: " and multiplying that Z times the a.",
    },
    {
      start: "00:02:56.000",
      end: "00:02:58.000",
      text: " So, therefore, that can't stop.",
    },
    {
      start: "00:02:58.000",
      end: "00:03:00.000",
      text: " Now, we're left with x plus y.",
    },
    {
      start: "00:03:00.000",
      end: "00:03:06.000",
      text: " And we, and he usually like to represent this with a single term in front of the only two terms.",
    },
    {
      start: "00:03:06.000",
      end: "00:03:11.000",
      text: " So, I'm going to write Z over b plus a.",
    },
    {
      start: "00:03:11.000",
      end: "00:03:14.000",
      text: " Then, now, the last thing I need to get that y by itself,",
    },
    {
      start: "00:03:14.000",
      end: "00:03:15.000",
      text: " so I need to get rid of the x.",
    },
    {
      start: "00:03:15.000",
      end: "00:03:20.000",
      text: " So, the x is added to the y, and we're subtract the x.",
    },
    {
      start: "00:03:20.000",
      end: "00:03:26.000",
      text: " Therefore, my final solution is y equals Z or b plus a.",
    },
    {
      start: "00:03:26.000",
      end: "00:03:30.000",
      text: " And that is how you solve an equation when they ask you for a signal.",
    },
    {
      start: "00:03:30.000",
      end: "00:03:32.000",
      text: " Oh, my second.",
    },
    {
      start: "00:03:32.000",
      end: "00:03:33.000",
      text: " Thank you.",
    },
    {
      start: "00:03:33.000",
      end: "00:03:36.000",
      text: " That's how you solve an equation with their a or a sub term.",
    },
    {
      start: "00:03:36.000",
      end: "00:03:42.000",
      text: " So, that's how you solve an equation with their a or a sub term.",
    },
    {
      start: "00:03:42.000",
      end: "00:03:48.000",
      text: " So, the first thing I need to do is to get rid of x.",
    },
    {
      start: "00:03:48.000",
      end: "00:03:54.000",
      text: " So, the first thing I need to do is to get rid of x.",
    },
    {
      start: "00:03:54.000",
      end: "00:04:00.000",
      text: " So, the first thing I need to do is to get rid of x.",
    },
  ],
});

const loadVideo = () => {
  // grab the video ID
  let m = videoUrl.value.match(/v=(.*)/);
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

const getResults = async () => {
  predictionResults.value = [];
  $q.loading.show();

  try {
    const { data: res } = await axios.get(`${apiUrl}/results/1`);
    console.log(res);
  } catch (err) {
    $q.notify({
      type: "negative",
      message: err.message || "Could not get prediction",
    });
  }
  $q.loading.hide();
};

const onReady = () => {
  if (player.value.$el.src === "") {
    return;
  }
  console.log("here");
  // player.value.playVideo();
};
</script>
