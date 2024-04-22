var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.06099904608203843,
        "pitch": 0.2508098948913613,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.09999507340921987,
          "pitch": 0.6855136410959624,
          "rotation": 6.283185307179586,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.010722518440767104,
        "pitch": 0.43932905907006514,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.8654512977527684,
          "pitch": 0.6670724999539246,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": 0.47531664718449385,
          "pitch": 0.32552582974903643,
          "rotation": 6.283185307179586,
          "target": "4-entrada-corredor"
        },
        {
          "yaw": 0.9962175670137334,
          "pitch": 0.45016298047827874,
          "rotation": 0.7853981633974483,
          "target": "2-estdio-de-vdeo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-estdio-de-vdeo",
      "name": "Estúdio de Vídeo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.151659537030568,
        "pitch": 0.18051960604845085,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.2103992640301264,
          "pitch": 0.15924651355331143,
          "rotation": 0.7853981633974483,
          "target": "1-entrada"
        },
        {
          "yaw": 0.3405425250222258,
          "pitch": -0.22289936637773344,
          "rotation": 0.7853981633974483,
          "target": "3-regie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-regie",
      "name": "Regie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.0218229544370807,
        "pitch": 0.26245010712172956,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.0497490749165177,
          "pitch": 0.2738783246849188,
          "rotation": 5.497787143782138,
          "target": "2-estdio-de-vdeo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entrada-corredor",
      "name": "Entrada (Corredor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.641709595365036,
        "pitch": 0.07646898400727231,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -3.0705375724063444,
          "pitch": 0.41397191589889815,
          "rotation": 0,
          "target": "5-03"
        },
        {
          "yaw": -2.7230962874617273,
          "pitch": 0.3743733577572108,
          "rotation": 12.566370614359176,
          "target": "6-escadas-para-o-primeiro-andar"
        },
        {
          "yaw": -0.21085515185167836,
          "pitch": 0.6253744443887683,
          "rotation": 0.7853981633974483,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-03",
      "name": "0.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6701789444039257,
        "pitch": 0.23491468249963887,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.2039957933373486,
          "pitch": 0.4757691872267813,
          "rotation": 0.7853981633974483,
          "target": "4-entrada-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-escadas-para-o-primeiro-andar",
      "name": "Escadas para o Primeiro Andar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.4281078174036796,
        "pitch": 0.28181437171461354,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -3.0382971425579566,
          "pitch": 0.5481732301721909,
          "rotation": 0,
          "target": "4-entrada-corredor"
        },
        {
          "yaw": 1.638548796579288,
          "pitch": 0.14483607332844528,
          "rotation": 11.780972450961727,
          "target": "8-primeiro-andar"
        },
        {
          "yaw": -2.982562696013339,
          "pitch": -0.3004383997371445,
          "rotation": 1.5707963267948966,
          "target": "7-16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-16",
      "name": "1.6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6125626208701895,
        "pitch": 0.3245292648567535,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.6099100360928205,
          "pitch": 0.27438765577708857,
          "rotation": 0.7853981633974483,
          "target": "6-escadas-para-o-primeiro-andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-primeiro-andar",
      "name": "Primeiro Andar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.4775196531215338,
        "pitch": 0.33319470154743236,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.6102007795880153,
          "pitch": 0.3165769457431509,
          "rotation": 1.5707963267948966,
          "target": "6-escadas-para-o-primeiro-andar"
        },
        {
          "yaw": -3.128365754888378,
          "pitch": 0.6147904291927944,
          "rotation": 7.0685834705770345,
          "target": "10-escada-espiral-primeiro-andar"
        },
        {
          "yaw": 0.5469921304843002,
          "pitch": 0.3974052744748011,
          "rotation": 6.283185307179586,
          "target": "9-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-12",
      "name": "1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.9331785670039654,
        "pitch": 0.4365937399448132,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.840909127490251,
          "pitch": 0.42903553849354914,
          "rotation": 7.0685834705770345,
          "target": "8-primeiro-andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-escada-espiral-primeiro-andar",
      "name": "Escada Espiral Primeiro Andar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6066389012736053,
        "pitch": 0.48985729946591583,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.203839152172293,
          "pitch": 0.7441304115313887,
          "rotation": 11.780972450961727,
          "target": "8-primeiro-andar"
        },
        {
          "yaw": 1.3417608101519303,
          "pitch": 0.4700602561697611,
          "rotation": 11.780972450961727,
          "target": "11-segundo-andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-segundo-andar",
      "name": "Segundo Andar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.9195461967694705,
        "pitch": 0.3274027426363304,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.67176656114197,
          "pitch": 0.7594321635048757,
          "rotation": 0.7853981633974483,
          "target": "10-escada-espiral-primeiro-andar"
        },
        {
          "yaw": 1.2707947890399378,
          "pitch": 0.6760638213347399,
          "rotation": 5.497787143782138,
          "target": "12-21"
        },
        {
          "yaw": -1.7239714041505128,
          "pitch": 0.7256485668535664,
          "rotation": 0,
          "target": "13-segundo-andar-corredores"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-21",
      "name": "2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.9221776412671225,
        "pitch": 0.3050250257236087,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.5448729390094975,
          "pitch": 0.47689323912712567,
          "rotation": 0.7853981633974483,
          "target": "11-segundo-andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-segundo-andar-corredores",
      "name": "Segundo Andar Corredores",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.5992395897712761,
        "pitch": 0.5388915682383768,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.9304193461909769,
          "pitch": 0.5848258582016665,
          "rotation": 11.780972450961727,
          "target": "11-segundo-andar"
        },
        {
          "yaw": -2.9429969160593092,
          "pitch": 0.6654616430089497,
          "rotation": 0,
          "target": "16-segundo-andar-28-25-entradas"
        },
        {
          "yaw": -0.9460935071611978,
          "pitch": 0.8331098143916087,
          "rotation": 10.995574287564278,
          "target": "14-29"
        },
        {
          "yaw": 2.060457895701825,
          "pitch": 0.8873934530353313,
          "rotation": 0,
          "target": "15-24"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-29",
      "name": "2.9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.12348343773857,
        "pitch": 0.24575707987311368,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -3.0412029895521435,
          "pitch": 0.32049432618962825,
          "rotation": 0,
          "target": "13-segundo-andar-corredores"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-24",
      "name": "2.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8910405015059766,
        "pitch": 0.13713949246585777,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.955034347274088,
          "pitch": 0.28428283985880043,
          "rotation": 5.497787143782138,
          "target": "13-segundo-andar-corredores"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-segundo-andar-28-25-entradas",
      "name": "Segundo Andar 2.8 2.5 Entradas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.05593293982068026,
        "pitch": 0.27453228042851663,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.955181243300192,
          "pitch": 0.8412415448835606,
          "rotation": 0.7853981633974483,
          "target": "17-25"
        },
        {
          "yaw": 0.05532991565327272,
          "pitch": 0.4681535370801537,
          "rotation": 0,
          "target": "13-segundo-andar-corredores"
        },
        {
          "yaw": -3.068028120523797,
          "pitch": 0.6454082495495577,
          "rotation": 0,
          "target": "19-segundo-andar-26-27-entradas"
        },
        {
          "yaw": -0.8501316369786824,
          "pitch": 0.8558420365849209,
          "rotation": 5.497787143782138,
          "target": "18-28"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-25",
      "name": "2.5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.943967319918066,
        "pitch": 0.3890946088732363,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.743103837187819,
          "pitch": 0.5265793536151158,
          "rotation": 5.497787143782138,
          "target": "16-segundo-andar-28-25-entradas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-28",
      "name": "2.8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.1762825201120464,
        "pitch": 0.30170988326461945,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.207476416534771,
          "pitch": 0.4011303911565953,
          "rotation": 0.7853981633974483,
          "target": "16-segundo-andar-28-25-entradas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-segundo-andar-26-27-entradas",
      "name": "Segundo Andar 2.6 2.7 Entradas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8793782062287008,
        "pitch": 0.5157168156633336,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.2584192988231955,
          "pitch": 0.6134710013185813,
          "rotation": 0,
          "target": "16-segundo-andar-28-25-entradas"
        },
        {
          "yaw": 2.751395880559212,
          "pitch": 0.8555905342868222,
          "rotation": 11.780972450961727,
          "target": "20-26"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-26",
      "name": "2.6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0993287705219874,
        "pitch": 0.23235825509420316,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.6768464830918877,
          "pitch": 0.4475390648323341,
          "rotation": 5.497787143782138,
          "target": "19-segundo-andar-26-27-entradas"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EPI Tour 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
