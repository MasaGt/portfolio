import { Work } from "./app/_types/types";

/**
 * 自分のworkの情報を保存するファイル
 * 将来的には外部DBに移すかも
 */
export const works_data: Work[] = [
  {
    thumbnail: "blog_img.png",
    title: "portofolio v2",
    description: "My new portofolio. Using Next.js as a framework",
    skills: ["Type Script", "Next.js", "Swiper", "Recoil", "clsx"],
    imgs: ["blog_img.png", "blog_img.png", "blog_img.png", "blog_img.png"],
    type: "web",
  },
  {
    thumbnail: "blog_img.png",
    title: "Vineyard Climate Monitoring",
    description:
      "An android app that monitors weather data and forecasts temperature in 1 hour using AI model.",
    skills: ["Java Script", "React", "React Native", "Team Leading"],
    imgs: ["blog_img.png", "blog_img.png", "blog_img.png"],
    type: "mobible",
  },
  {
    thumbnail: "flutter_game_app_thumbnail.png",
    title: "Flutter Game App",
    description:
      "A mobile app. Move a falling kiwi bird to dodges objects. I implemented Ranking, and Setting screens.",
    skills: ["Flutter", "Dart", "Firebase", "Android Studio"],
    imgs: [
      "flutter_game_app_1.png",
      "flutter_game_app_2.png",
      "flutter_game_app_3.png",
      "flutter_game_app_4.png",
      "flutter_game_app_5.png",
    ],
    type: "mobible",
  },
  {
    thumbnail: "portofoilo_v1_thumbnail.png",
    title: "portofolio v1",
    description: "My first portfolio using HTML5, css3, and JavaScript.",
    skills: ["HTML5", "CSS3", "Java Script"],
    imgs: ["portofoilo_v1_1.png", "portofoilo_v1_2.png", "portofoilo_v1_3.png"],
    type: "web",
  },
];
