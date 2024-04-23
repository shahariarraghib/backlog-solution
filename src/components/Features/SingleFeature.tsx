import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1080"
          height="1080"
          viewBox="0 0 1080 1080"
        >
          <defs>
            <clipPath id="clip-integrations_1-blob">
              <rect width="1080" height="1080" />
            </clipPath>
          </defs>
          <g
            id="integrations_1-blob"
            clip-path="url(#clip-integrations_1-blob)"
          >
            <path
              id="Path_35318"
              data-name="Path 35318"
              d="M619.588,756.631c-451.043,89.78-488.657-93.7-583.512-338.019S27.177,19.269,368.393,2.826s619.454,34.585,677.811,266.6S1070.631,666.851,619.588,756.631Z"
              transform="translate(178.672 36.182) rotate(20)"
              fill="#0065f2"
              opacity="0.048"
            />
            <g
              id="Group_22274"
              data-name="Group 22274"
              transform="translate(511.174 94.724)"
              opacity="0.5"
            >
              <path
                id="Path_35925"
                data-name="Path 35925"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35926"
                data-name="Path 35926"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35927"
                data-name="Path 35927"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35928"
                data-name="Path 35928"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35929"
                data-name="Path 35929"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 215.26) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35930"
                data-name="Path 35930"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 215.26) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35931"
                data-name="Path 35931"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35932"
                data-name="Path 35932"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35933"
                data-name="Path 35933"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.107 130.947) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35934"
                data-name="Path 35934"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.107 130.947) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35935"
                data-name="Path 35935"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35936"
                data-name="Path 35936"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35937"
                data-name="Path 35937"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 46.631) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35938"
                data-name="Path 35938"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(295.106 46.631) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35939"
                data-name="Path 35939"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(295.106 4.474) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35940"
                data-name="Path 35940"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(295.106 4.474) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35961"
                data-name="Path 35961"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35962"
                data-name="Path 35962"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35963"
                data-name="Path 35963"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35964"
                data-name="Path 35964"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35965"
                data-name="Path 35965"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35966"
                data-name="Path 35966"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35967"
                data-name="Path 35967"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.95 173.104) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35968"
                data-name="Path 35968"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.95 173.104) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35969"
                data-name="Path 35969"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35970"
                data-name="Path 35970"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35971"
                data-name="Path 35971"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35972"
                data-name="Path 35972"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(252.949 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35973"
                data-name="Path 35973"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(252.949 46.631) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35974"
                data-name="Path 35974"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(252.949 46.631) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35975"
                data-name="Path 35975"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(252.949 4.476) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35976"
                data-name="Path 35976"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(252.949 4.476) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35997"
                data-name="Path 35997"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35998"
                data-name="Path 35998"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_35999"
                data-name="Path 35999"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36000"
                data-name="Path 36000"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36001"
                data-name="Path 36001"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.793 215.261) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36002"
                data-name="Path 36002"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.793 215.261) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36003"
                data-name="Path 36003"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36004"
                data-name="Path 36004"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36005"
                data-name="Path 36005"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36006"
                data-name="Path 36006"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.792 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36007"
                data-name="Path 36007"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(210.792 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36008"
                data-name="Path 36008"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(210.792 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36009"
                data-name="Path 36009"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(210.792 46.631) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36010"
                data-name="Path 36010"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(210.792 46.631) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36011"
                data-name="Path 36011"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.787 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36012"
                data-name="Path 36012"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(210.787 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36033"
                data-name="Path 36033"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.635 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36034"
                data-name="Path 36034"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.635 299.573) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36035"
                data-name="Path 36035"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.636 257.418) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36036"
                data-name="Path 36036"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.923,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.636 257.418) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36037"
                data-name="Path 36037"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.635 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36038"
                data-name="Path 36038"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.635 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36039"
                data-name="Path 36039"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.635 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36040"
                data-name="Path 36040"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.635 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36041"
                data-name="Path 36041"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(168.635 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36042"
                data-name="Path 36042"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(168.635 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36043"
                data-name="Path 36043"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(168.635 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36044"
                data-name="Path 36044"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(168.635 88.789) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36045"
                data-name="Path 36045"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.63 46.629) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36046"
                data-name="Path 36046"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.63 46.629) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36047"
                data-name="Path 36047"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.63 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36048"
                data-name="Path 36048"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(168.63 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36069"
                data-name="Path 36069"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.923,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(126.477 299.577) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36070"
                data-name="Path 36070"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.923,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(126.477 299.577) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36071"
                data-name="Path 36071"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.477 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36072"
                data-name="Path 36072"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.477 257.416) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36073"
                data-name="Path 36073"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.477 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36074"
                data-name="Path 36074"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.477 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36075"
                data-name="Path 36075"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(126.478 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36076"
                data-name="Path 36076"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(126.478 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36077"
                data-name="Path 36077"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(126.478 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36078"
                data-name="Path 36078"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(126.478 130.946) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36079"
                data-name="Path 36079"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.476 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36080"
                data-name="Path 36080"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.476 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36081"
                data-name="Path 36081"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.476 46.63) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36082"
                data-name="Path 36082"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.476 46.63) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36083"
                data-name="Path 36083"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.476 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36084"
                data-name="Path 36084"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(126.476 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36105"
                data-name="Path 36105"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(84.319 299.576) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36106"
                data-name="Path 36106"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(84.319 299.576) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36107"
                data-name="Path 36107"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(84.319 257.419) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36108"
                data-name="Path 36108"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(84.319 257.419) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36109"
                data-name="Path 36109"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(84.32 215.259) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36110"
                data-name="Path 36110"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(84.32 215.259) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36111"
                data-name="Path 36111"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(84.32 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36112"
                data-name="Path 36112"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(84.32 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36113"
                data-name="Path 36113"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 130.943) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36114"
                data-name="Path 36114"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 130.943) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36115"
                data-name="Path 36115"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36116"
                data-name="Path 36116"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36117"
                data-name="Path 36117"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 46.628) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36118"
                data-name="Path 36118"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 46.628) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36119"
                data-name="Path 36119"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36120"
                data-name="Path 36120"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(84.319 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36141"
                data-name="Path 36141"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 299.576) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36142"
                data-name="Path 36142"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 299.576) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36143"
                data-name="Path 36143"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.16,3.16,0,0,1,5.4,5.4"
                transform="translate(42.162 257.419) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36144"
                data-name="Path 36144"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.16,3.16,0,0,1,5.4,5.4"
                transform="translate(42.162 257.419) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36145"
                data-name="Path 36145"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.16,3.16,0,0,1,5.4,5.4"
                transform="translate(42.162 215.261) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36146"
                data-name="Path 36146"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.16,3.16,0,0,1,5.4,5.4"
                transform="translate(42.162 215.261) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36147"
                data-name="Path 36147"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 173.098) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36148"
                data-name="Path 36148"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 173.098) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36149"
                data-name="Path 36149"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 130.943) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36150"
                data-name="Path 36150"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 130.943) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36151"
                data-name="Path 36151"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36152"
                data-name="Path 36152"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36153"
                data-name="Path 36153"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 46.63) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36154"
                data-name="Path 36154"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 46.63) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36155"
                data-name="Path 36155"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36156"
                data-name="Path 36156"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(42.162 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36177"
                data-name="Path 36177"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(0.005 299.576) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36178"
                data-name="Path 36178"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(0.005 299.576) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36179"
                data-name="Path 36179"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(0.005 257.419) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36180"
                data-name="Path 36180"
                d="M5.4,5.4A3.161,3.161,0,1,1,5.4.926,3.155,3.155,0,0,1,5.4,5.4"
                transform="translate(0.005 257.419) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36181"
                data-name="Path 36181"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(0 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36182"
                data-name="Path 36182"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(0 215.258) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36183"
                data-name="Path 36183"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(0 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36184"
                data-name="Path 36184"
                d="M5.4,5.4A3.164,3.164,0,1,1,5.4.926,3.168,3.168,0,0,1,5.4,5.4"
                transform="translate(0 173.103) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36185"
                data-name="Path 36185"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 130.943) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36186"
                data-name="Path 36186"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 130.943) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36187"
                data-name="Path 36187"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36188"
                data-name="Path 36188"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 88.786) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36189"
                data-name="Path 36189"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 46.628) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36190"
                data-name="Path 36190"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 46.628) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36191"
                data-name="Path 36191"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 4.473) rotate(-45)"
                fill="#0065f2"
              />
              <path
                id="Path_36192"
                data-name="Path 36192"
                d="M5.4,5.4A3.163,3.163,0,1,1,5.4.926,3.163,3.163,0,0,1,5.4,5.4"
                transform="translate(0.005 4.473) rotate(-45)"
                fill="#0065f2"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SingleFeature;
