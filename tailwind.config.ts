import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2A66AE",
        primarytxt: "#3667A3",
        primaryLight:"#D3E7FF",
        orangeLight: "#FFF0EA", 
        primary2: "#161C51",
        primary10: "rgba(0, 105, 43, 0.1)",
        primary1: "yellow-300",
        primary5: "rgba(25, 245, 111, 0.05)",
        primaryTrans10: "rgba(82, 255, 134, 0.1)",
        head: "#333",
        appOrange: "#FF4F00",
        blueChatHighlight: "#E9F3FF",
        blueChatHighlightHover: "#F5FAFF",
        blueChatHighlightActive: "#E9F3FF",

        appBlack:"#212121",

        pending: "#FFA500",

        chartBlue: "#596AFF",
        chartGreen: "#36BB2A",

        farmerbox: "rgba(253, 240, 176, 0.6)",
        buyerbox: "#D7FFE9",
        inputdealerbox: "#FFD0E5",
        incubateesbox: "#C6E7F9",

        secondary: "#8ABB2A",
        accent: "#8ABB2A",
        accent2: "#E9C200",
        accent3: "#FDF0B0",
        accent4: "#F2FFF7",
        accent10: "rgba(138, 187, 42, 0.1)",


        // TEXTS
        greentxt: "#235643",
        lightgreentxt: "#86B9A6",
        greytxt: "#9E9E9E",
        userEmail: "#7076AB",
        headDesc: "#1A1A1A",
        
        // GRAYS
        inputLogin: "#F7F9FB",
        border: "#F0F0F0",
        onPanelGray: "#F4F4F4",
        blueGray: "#C8E1FF",
        dividerGray: "#F1F1F1",
        profileDividerGray: "#E4E4E4",
        brownGray: "#F3F3F3",
        brownerGray: "#DCDCDC",

        // INPUTS
        inputBg: "#F6F6F6",
        inputBorder :"#EEEEEE",
        
        // Progress
        progressTrack: "#DDDDDD",
        progress:"#2A66AE",
        
        progressTrack2: "#F4F4F4",
        progress2:"#85E364",
        
        
        // CHAT BOXES
        nameTag: "#A6A6A6",
        outbox: "#BEF6FE",
        chatinput: "#F7F7F7",
        chatinputtext: "#BEBEBE",
        


        // HOVERS
        whiteHover:"rgb(255, 255, 255, 0.1)",
        
        // ACTIVE STYLES
        whiteActive:"rgb(255, 255, 255, 0.15)",
        whiteLoading: "rgb(255, 255, 255, 0.4)",
        
        blackHover: "rgb(0, 0, 0, 0.1)",
        blackActive: "rgb(0, 0, 0, 0.15)",
        blackLoading: "rgb(0, 0, 0, 0.4)",

        filterGray: "#787676",
        labelGrey: "#787878",
        someGray: "#73777F",
        someDarkGray: "#201919",
        sidebarEdge: "#697586",
        sidebarDiv: "#E3E8EF",
        dashboardBg: "#F5F7F9",
        noteIconBtn: "#FAFAFA",
        smallHeadTxt: "#667085",
        bigHeadTxt: "#101828",
        sidebarTxt: "#E3E8EF",
        sidebarTxtHover: "rgba(227, 232, 239, 0.8)",
        sidebarTxtActive: "rgba(227, 232, 239, 1)",
        linkTxt: "#364152",
        incuTxt: "#F6FFF6",
        tableTopGray: "#ECECEC",
        tableStroke: "rgba(227, 232, 239, 0.5)",
        tableGray: "rgba(227, 232, 239, 1)",
        someBorderGray: "#EAEAEA",
        someOtherGrayBorder: "#F8F8F8",
        smallHeadTxtGray: "#E0E0E0",


        "80%": "#5c5c5c",
        blackTrans80: "rgba(0, 0, 0, 0.8)",
        blackTrans10: "rgba(0, 0, 0, 0.1)",
        blackTrans20: "rgba(0, 0, 0, 0.2)",
        shadow: "rgba(0, 0, 0, 0.15)",
        icons: "#A3ACB9",
        border2: "#DBDBDB",

        label: "#3D4A5C",
        input: "#787676",
        input10: "rgba(51, 51, 51, 0.1)",
        input20: "rgba(51, 51, 51, 0.2)",
        input60: "rgba(51, 51, 51, 0.6)",
        input80: "rgba(51, 51, 51, 0.8)",
        inputEdit: "#F9FAFB",
        infoTxt: "#8F8F8F",
        line: "#D7DFE9",
        hiPill: "#FDF0B0",
        error: "#D92C20",


        error2: "#DE1238",
        error2Trans10: "rgba(222, 18, 56, 0.1)",
        success: "#019938",
        successTrans10: "rgba(8, 151, 99, 0.1)",


      },
    },
  },
  plugins: [],
};
export default config;
