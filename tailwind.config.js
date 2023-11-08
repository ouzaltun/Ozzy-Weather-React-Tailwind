/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-color": "rgba(196, 195, 193, 0.4)",
      },
    },
    backgroundImage: {
      mainImage:
        "url('https://s3-alpha-sig.figma.com/img/7816/eafa/1bceefb1d3ea5b7d0f528d6d9e8b16e3?Expires=1700438400&Signature=eObKAvNorTZvflxb6CwUxRKHwFL2apWAij~9p0oTmkcmRsYwTuxinTml0olX~N1vCXGNu7pDhC9MVclDNXp-CSWRqiZ6oWnyjOldG~8NKl59XmGHUKRN3UY4ZoDolouFKrf4fRp3Az~s3CPhOhRjKV0igBbtUrwBQG~8TQYPdqDESRN~Dl53JZFYf0rfG6qTdtjCXNvEDIz6vsWElJ55SL9lzwtmnmYNRsABhFwpjsJdSLpb4mBg2lPjIPiu~UvUmKPEGA~h9X2GWa9-UULHLJ5TMjdld9BmzbRym~rIXvLICbago1koypkzAeLitiJU89u7O1pIh392Y3ZJBuMZMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
    },
    borderRadius: {
      priv: "27.244px",
    },
  },
  plugins: [],
};
