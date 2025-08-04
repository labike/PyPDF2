window.BENCHMARK_DATA = {
  "lastUpdate": 1754302294027,
  "repoUrl": "https://github.com/labike/PyPDF2",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "committer": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "id": "1305df628fc63ed70829902edf934ab186b112c7",
          "message": "Add Benchmark for Performance Testing",
          "timestamp": "2022-04-19T10:36:47Z",
          "url": "https://github.com/py-pdf/PyPDF2/pull/781/commits/1305df628fc63ed70829902edf934ab186b112c7"
        },
        "date": 1650371123811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9324214668863358,
            "unit": "iter/sec",
            "range": "stddev: 0.004305996984652197",
            "extra": "mean: 1.0724763806 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "committer": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "id": "3dac50386da3c6d310d4a9ece804bc140e8e0798",
          "message": "Add Benchmark for Performance Testing",
          "timestamp": "2022-04-19T10:36:47Z",
          "url": "https://github.com/py-pdf/PyPDF2/pull/781/commits/3dac50386da3c6d310d4a9ece804bc140e8e0798"
        },
        "date": 1650372088110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9422550305909239,
            "unit": "iter/sec",
            "range": "stddev: 0.006487516920717905",
            "extra": "mean: 1.0612838005999947 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.256656597871526,
            "unit": "iter/sec",
            "range": "stddev: 0.004297642398638799",
            "extra": "mean: 97.49765827272809 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0f1fa3641cf1cda96e1bb1a655493617df5281c",
          "message": "DEV: Add Benchmark for Performance Testing (#781)\n\nWe want to track performance over time only for what actually\r\nis in main.\r\n\r\nCloses #761",
          "timestamp": "2022-04-21T18:19:24+02:00",
          "tree_id": "1eaf5ea1f69a7068b51ebe29334edb8c75efe091",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f0f1fa3641cf1cda96e1bb1a655493617df5281c"
        },
        "date": 1650557998642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 1.0526627229158771,
            "unit": "iter/sec",
            "range": "stddev: 0.0067697065658216754",
            "extra": "mean: 949.9718934000043 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 11.38381983307977,
            "unit": "iter/sec",
            "range": "stddev: 0.004719622305106786",
            "extra": "mean: 87.84397633333423 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "668869f17988284e260c30b39c47eb26e033df54",
          "message": "DOC: Add compression example (#792)",
          "timestamp": "2022-04-22T08:10:05+02:00",
          "tree_id": "50ce3e1e74b68984df1ee6d33fddab8e41c6054a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/668869f17988284e260c30b39c47eb26e033df54"
        },
        "date": 1650607837510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9530085273748775,
            "unit": "iter/sec",
            "range": "stddev: 0.012098282851842536",
            "extra": "mean: 1.049308554199996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.434029435085847,
            "unit": "iter/sec",
            "range": "stddev: 0.0046057474193716705",
            "extra": "mean: 95.84025099999849 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffb208478144c2dc8f7ee9a4038f2c1c85ac99df",
          "message": "ENH: Allow setting form field flags (#802)\n\nCloses #574\r\nCloses #801\r\n\r\nCo-authored-by: Craig Jones <craig@k6nnl.com>",
          "timestamp": "2022-04-23T10:17:57+02:00",
          "tree_id": "730c99cfa0a0db24008b5ec4faf861825b15be0a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/ffb208478144c2dc8f7ee9a4038f2c1c85ac99df"
        },
        "date": 1650701907682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 1.05365515080177,
            "unit": "iter/sec",
            "range": "stddev: 0.005612559551809395",
            "extra": "mean: 949.0771238000008 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 11.561522963694742,
            "unit": "iter/sec",
            "range": "stddev: 0.0038475156847702775",
            "extra": "mean: 86.49379525000118 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40df4d7622c8b838a631113ced680d021070dd80",
          "message": "ENH: Allow setting permission flags when encrypting (#803)\n\nCloses #161\r\nCloses #308",
          "timestamp": "2022-04-23T10:43:54+02:00",
          "tree_id": "908a8418f3c819e228019736692c867df495166a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/40df4d7622c8b838a631113ced680d021070dd80"
        },
        "date": 1650703469764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.950078836259226,
            "unit": "iter/sec",
            "range": "stddev: 0.005702058684478769",
            "extra": "mean: 1.0525442330000003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.280940522982494,
            "unit": "iter/sec",
            "range": "stddev: 0.00423528362980359",
            "extra": "mean: 97.26736554545309 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d659389e7561c024b5ffb9edd810e94814fa63e",
          "message": "ROB: Handle recursion error (#804)\n\nThis doesn't solve the issue, but it might make it less severe.\r\n\r\nSee #520\r\nSee #268\r\nSee https://github.com/virantha/pypdfocr/issues/59\r\n\r\nhttps://github.com/sfneal/PyPDF3/commit/3558a69388b12bbf166d81b8a863b1d6c9843c62\r\n\r\nCo-authored-by: danniesim <geemee@gmail.com>",
          "timestamp": "2022-04-23T10:57:54+02:00",
          "tree_id": "bc451d9cfc50cc3ba097311c2ed29028491f0ef3",
          "url": "https://github.com/py-pdf/PyPDF2/commit/3d659389e7561c024b5ffb9edd810e94814fa63e"
        },
        "date": 1650704308997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9304874995964462,
            "unit": "iter/sec",
            "range": "stddev: 0.005964200812272813",
            "extra": "mean: 1.0747054640000016 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.056596564428304,
            "unit": "iter/sec",
            "range": "stddev: 0.0035597955706618586",
            "extra": "mean: 99.43721949999969 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9941099b80dee1db6bfc747535b9d822b0fb0617",
          "message": "TST: Newlines in text extraction (#807)",
          "timestamp": "2022-04-23T14:50:17+02:00",
          "tree_id": "5c94513b4178944e0e5a534e1dce9dbc1e9d4f80",
          "url": "https://github.com/py-pdf/PyPDF2/commit/9941099b80dee1db6bfc747535b9d822b0fb0617"
        },
        "date": 1650718254429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9236413346619341,
            "unit": "iter/sec",
            "range": "stddev: 0.004035420224873149",
            "extra": "mean: 1.0826713384000015 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.939253390400175,
            "unit": "iter/sec",
            "range": "stddev: 0.0038204766514719417",
            "extra": "mean: 100.61117879999415 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jensg@posteo.de",
            "name": "dsk7",
            "username": "dsk7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6c56f550bb384e05f0139c796ba1308837d6373",
          "message": "MAINT: Quadratic runtime while parsing reduced to linear  (#808)\n\nWhen the PdfFileReader tries to find the xref marker, the readNextEndLine methods builds a so called line by reading byte-for-byte. Every time a new byte is read, it is concatenated with the currently read line. This leads to quadratic runtime O(n²) behavior as Python strings (also byte-strings) are immutable and have to be copied where n is the size of the file.\r\nFor files where the xref marker can not be found at the end this takes a enormous amount of time:\r\n\r\n* 1mb of zeros at the end: 45.54 seconds\r\n* 2mb of zeros at the end: 357.04 seconds\r\n(measured on a laptop made in 2015)\r\n\r\nThis pull request changes the relevant section of the code to become linear runtime O(n), leading to a run time of less then a second for both cases mentioned above. Furthermore this PR adds a regression test.",
          "timestamp": "2022-04-23T19:12:13+02:00",
          "tree_id": "808b058c26b46591b397469807b07d8e66b9f34c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c6c56f550bb384e05f0139c796ba1308837d6373"
        },
        "date": 1650733971283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.8009431525956788,
            "unit": "iter/sec",
            "range": "stddev: 0.03857775783449113",
            "extra": "mean: 1.2485280593999988 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.39094445470576,
            "unit": "iter/sec",
            "range": "stddev: 0.006776916663739223",
            "extra": "mean: 119.17609577777455 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4c8cab3292ccc52117ad1b38a10262640dfc158",
          "message": "BUG: Fix PDFDocEncoding Character Set (#809)\n\nCloses #151",
          "timestamp": "2022-04-23T22:27:38+02:00",
          "tree_id": "0b6a206e03da2af191d7509479c739e2d3f99f89",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d4c8cab3292ccc52117ad1b38a10262640dfc158"
        },
        "date": 1650745704204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5706882244432586,
            "unit": "iter/sec",
            "range": "stddev: 0.014223725815557052",
            "extra": "mean: 1.752270254000004 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.80955246084517,
            "unit": "iter/sec",
            "range": "stddev: 0.004528453099679591",
            "extra": "mean: 113.51314433333452 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1be80dff6b3dee50fe742ad39ddc9621785dd4f",
          "message": "BUG: Improve spacing for text extraction (#806)\n\nPyPDF2 now takes positive / negative spaces between text blocks into account. Not very elegant, but the result looks way better than before.",
          "timestamp": "2022-04-23T22:49:16+02:00",
          "tree_id": "0a6aa3c32ef620aef177d4b8768221b45e0b7202",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d1be80dff6b3dee50fe742ad39ddc9621785dd4f"
        },
        "date": 1650746991936,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6484490309962616,
            "unit": "iter/sec",
            "range": "stddev: 0.004707152661956923",
            "extra": "mean: 1.5421412511999961 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.089894095260362,
            "unit": "iter/sec",
            "range": "stddev: 0.0007410550961924088",
            "extra": "mean: 99.10906800000419 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3247e8d531b7dd35ca1c55a5bed5ea4151b9fa8",
          "message": "ENH: Add papersizes (#800)",
          "timestamp": "2022-04-24T06:03:50+02:00",
          "tree_id": "966fb1ac42051614b11acae333b07bb52398e051",
          "url": "https://github.com/py-pdf/PyPDF2/commit/b3247e8d531b7dd35ca1c55a5bed5ea4151b9fa8"
        },
        "date": 1650773067691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5540552761217961,
            "unit": "iter/sec",
            "range": "stddev: 0.0049744553903781135",
            "extra": "mean: 1.804874067800003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.949716349828208,
            "unit": "iter/sec",
            "range": "stddev: 0.0008507589272494641",
            "extra": "mean: 111.73538477777514 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75410478227a396886be41b336aaefb201ac92cf",
          "message": "DOC: The PDF Format + commit prefixes (#810)",
          "timestamp": "2022-04-24T07:12:39+02:00",
          "tree_id": "749b17278ac678804df14095f3d9ffdfee7720c2",
          "url": "https://github.com/py-pdf/PyPDF2/commit/75410478227a396886be41b336aaefb201ac92cf"
        },
        "date": 1650777194088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6479789131674737,
            "unit": "iter/sec",
            "range": "stddev: 0.003677746212021266",
            "extra": "mean: 1.543260096399996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.12288684932602,
            "unit": "iter/sec",
            "range": "stddev: 0.006132508373283311",
            "extra": "mean: 98.78604936363384 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6729b8005e3d07ddf858da319e1ce27784368d88",
          "message": "DOC: CMaps (#811)",
          "timestamp": "2022-04-24T11:30:59+02:00",
          "tree_id": "0e168da055bb6a4f07ccb33287a14b730d4daa8d",
          "url": "https://github.com/py-pdf/PyPDF2/commit/6729b8005e3d07ddf858da319e1ce27784368d88"
        },
        "date": 1650792707218,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5062473877039959,
            "unit": "iter/sec",
            "range": "stddev: 0.020347651861574872",
            "extra": "mean: 1.9753188347999981 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.8468491530427995,
            "unit": "iter/sec",
            "range": "stddev: 0.007294014757637078",
            "extra": "mean: 127.43968700000133 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "f48b4acb5c1578fceb9fa97153583489cc4d164e",
          "message": "DEV: Adjust performance benchmark",
          "timestamp": "2022-04-24T13:21:27+02:00",
          "tree_id": "634289bb4f5e46222b399606562d13abad9a95fa",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f48b4acb5c1578fceb9fa97153583489cc4d164e"
        },
        "date": 1650799332627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6476011688384089,
            "unit": "iter/sec",
            "range": "stddev: 0.013645267097183788",
            "extra": "mean: 1.5441602765999989 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.24335243186828,
            "unit": "iter/sec",
            "range": "stddev: 0.005659092465901196",
            "extra": "mean: 97.62428918181922 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "663ca9899fcd98630727c235278f114ea75533de",
          "message": "ROB: Use null ID when encrypted but no ID given (#812)\n\nIf no '/ID' key is present in self.trailer an array of two empty bytestrings is used in place of an '/ID'. This is how Apache PDFBox handles this case.\r\n\r\nThis makes PyPDF2 more robust to malformed PDFs.\r\n\r\nCloses #608\r\nCloses #610\r\n\r\nFull credit for this one to Richard Millson - Martin Thoma only fixed a merge conflict\r\n\r\nCo-authored-by: Richard Millson <8217613+richardmillson@users.noreply.github.com>",
          "timestamp": "2022-04-24T13:30:33+02:00",
          "tree_id": "6a4e8497c6589f5375088f1d77c909b865bfcece",
          "url": "https://github.com/py-pdf/PyPDF2/commit/663ca9899fcd98630727c235278f114ea75533de"
        },
        "date": 1650799875942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.541893603172852,
            "unit": "iter/sec",
            "range": "stddev: 0.019628717523265633",
            "extra": "mean: 1.8453807059999974 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.78432658130401,
            "unit": "iter/sec",
            "range": "stddev: 0.0025973099354251743",
            "extra": "mean: 113.83911911111493 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63b4c91f4f466fa6fb9e256af3cadc11bb8e4a05",
          "message": "BUG: TypeError in xmp._converter_date (#813)\n\nFix: Convert decimal to int before passing it to datetime\r\n\r\nCloses #774",
          "timestamp": "2022-04-24T13:46:20+02:00",
          "tree_id": "33563b704555604f79db8e5c1737c3c781aa9546",
          "url": "https://github.com/py-pdf/PyPDF2/commit/63b4c91f4f466fa6fb9e256af3cadc11bb8e4a05"
        },
        "date": 1650800821542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5308827521609454,
            "unit": "iter/sec",
            "range": "stddev: 0.07265480137831483",
            "extra": "mean: 1.8836550932000038 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.928300240309044,
            "unit": "iter/sec",
            "range": "stddev: 0.007008704187200776",
            "extra": "mean: 112.0034018888892 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc7219360978dfb593fc4275e76b6f3057972c9",
          "message": "MAINT: Validate PDF magic byte in strict mode (#814)\n\nCloses #626",
          "timestamp": "2022-04-24T14:51:19+02:00",
          "tree_id": "fac05cd2ef17e2fdd9a43ce133b252c299455a62",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5bc7219360978dfb593fc4275e76b6f3057972c9"
        },
        "date": 1650804720365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5968691930782724,
            "unit": "iter/sec",
            "range": "stddev: 0.10524568460776369",
            "extra": "mean: 1.6754089700000008 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.975065944299576,
            "unit": "iter/sec",
            "range": "stddev: 0.0069488832822520805",
            "extra": "mean: 100.2499638181808 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "e673a6eb2dc9b2207a144d253f2504739655f461",
          "message": "DEV: Minor fix in make_changelog.py",
          "timestamp": "2022-04-24T15:30:16+02:00",
          "tree_id": "ec4435cfb572d70414b43320a4df5d94432b0e0c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e673a6eb2dc9b2207a144d253f2504739655f461"
        },
        "date": 1650807055894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6580371905513777,
            "unit": "iter/sec",
            "range": "stddev: 0.0040697971114903985",
            "extra": "mean: 1.5196709461999973 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.018692922795166,
            "unit": "iter/sec",
            "range": "stddev: 0.00440530782071321",
            "extra": "mean: 99.81341954545155 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "22033d724e0c8a684c5aca1d390deedb4331a273",
          "message": "REL: 1.27.9\n\nA change I would like to highlight is the performance improvement for\nlarge PDF files (#808) 🎉\n\nNew Features (ENH):\n-  Add papersizes (#800)\n-  Allow setting permission flags when encrypting (#803)\n-  Allow setting form field flags (#802)\n\nBug Fixes (BUG):\n-  TypeError in xmp._converter_date (#813)\n-  Improve spacing for text extraction (#806)\n-  Fix PDFDocEncoding Character Set (#809)\n\nRobustness (ROB):\n-  Use null ID when encrypted but no ID given (#812)\n-  Handle recursion error (#804)\n\nDocumentation (DOC):\n-  CMaps (#811)\n-  The PDF Format + commit prefixes (#810)\n-  Add compression example (#792)\n\nDeveloper Experience (DEV):\n-  Add Benchmark for Performance Testing (#781)\n\nMaintenance (MAINT):\n-  Validate PDF magic byte in strict mode (#814)\n-  Make PdfFileMerger.addBookmark() behave life PdfFileWriters\\' (#339)\n-  Quadratic runtime while parsing reduced to linear  (#808)\n\nTesting (TST):\n-  Newlines in text extraction (#807)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.27.8...1.27.9",
          "timestamp": "2022-04-24T15:32:00+02:00",
          "tree_id": "87103a760ba5e5826c6472d92e28e22513835231",
          "url": "https://github.com/py-pdf/PyPDF2/commit/22033d724e0c8a684c5aca1d390deedb4331a273"
        },
        "date": 1650807175210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5705970637383673,
            "unit": "iter/sec",
            "range": "stddev: 0.006161448737138847",
            "extra": "mean: 1.752550203200002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.321006282639642,
            "unit": "iter/sec",
            "range": "stddev: 0.0016392937995490596",
            "extra": "mean: 107.28455380000099 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39215c704791c10189668bbd1fa1d04d0b1f3f81",
          "message": "DOC: More details on text parsing issues (#815)",
          "timestamp": "2022-04-24T16:29:40+02:00",
          "tree_id": "cf2929720a034465cd1497ceb5d50ef283785b74",
          "url": "https://github.com/py-pdf/PyPDF2/commit/39215c704791c10189668bbd1fa1d04d0b1f3f81"
        },
        "date": 1650810620707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5266091808541599,
            "unit": "iter/sec",
            "range": "stddev: 0.04462753547546615",
            "extra": "mean: 1.8989414471999908 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.53769833696998,
            "unit": "iter/sec",
            "range": "stddev: 0.006891337436723719",
            "extra": "mean: 117.12758644443966 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80f2f2572d2602f37e0ed3be34ef95d5df62a278",
          "message": "DOC: PDF feature/version support (#816)",
          "timestamp": "2022-04-24T17:15:49+02:00",
          "tree_id": "2da7f003dd39086e84797959d37cb6e663394948",
          "url": "https://github.com/py-pdf/PyPDF2/commit/80f2f2572d2602f37e0ed3be34ef95d5df62a278"
        },
        "date": 1650813390431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.49904665714763946,
            "unit": "iter/sec",
            "range": "stddev: 0.016996534436094574",
            "extra": "mean: 2.003820656200001 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.91783474963698,
            "unit": "iter/sec",
            "range": "stddev: 0.005104605993043909",
            "extra": "mean: 126.29715466666546 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10ccbae325e875432a9980c4b78758203b728f33",
          "message": "TST: Add test for filters.ASCIIHexDecode (#822)\n\nFull Credit goes to https://github.com/py-pdf/PyPDF2/pull/817/commits/5c74416e6cb9675628975f12528ca908c554bb63\r\nwho wrote the test in 2018 for PyPDF4\r\n\r\nCo-authored-by: Acsor <nildexo@yandex.com>",
          "timestamp": "2022-04-25T21:53:25+02:00",
          "tree_id": "7ad67406b3aee8c71ae7848fddb8f4d705bc3f3c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/10ccbae325e875432a9980c4b78758203b728f33"
        },
        "date": 1650916454674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.4993369078003011,
            "unit": "iter/sec",
            "range": "stddev: 0.026954339188757847",
            "extra": "mean: 2.002655891000006 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.302262730048474,
            "unit": "iter/sec",
            "range": "stddev: 0.0012979079016196592",
            "extra": "mean: 120.44909111111224 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39ffc1d6265e1b710d87cd6fc1a5f6b270978090",
          "message": "TST: Add test for FlateDecode (#823)\n\nFull credit to\r\nhttps://github.com/py-pdf/PyPDF2/pull/817/commits/9f628b3989b2f9714db9eb850bed323329a61922\r\nwho added the test in 2018 to PyPDF4\r\n\r\nCo-authored-by: Acsor <nildexo@yandex.com>",
          "timestamp": "2022-04-25T22:38:54+02:00",
          "tree_id": "1406b92bec2277732129a7c71c9e5d0bf03b3e9e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/39ffc1d6265e1b710d87cd6fc1a5f6b270978090"
        },
        "date": 1650919175534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.533021892422493,
            "unit": "iter/sec",
            "range": "stddev: 0.04128214521394912",
            "extra": "mean: 1.8760955491999993 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.931744670108035,
            "unit": "iter/sec",
            "range": "stddev: 0.0009845891608524406",
            "extra": "mean: 111.96020900000765 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "963b25159a69eb3264cb7179082fe6ffce16126b",
          "message": "TST: Use external repository for larger/more PDFs for testing (#820)\n\n* Use submodule so that the connection is clear. Ensure that Flake8 issues of the submodule don't show up here\r\n* As a first step, just try to get the number of pages from the non-encrypted PDFs\r\n* Create an \"external\" pytest marker which allows people to deactivate tests that need the submodule",
          "timestamp": "2022-04-26T17:02:57+02:00",
          "tree_id": "c2f56b9f16c0df0b78500c475fe2e36d672a47be",
          "url": "https://github.com/py-pdf/PyPDF2/commit/963b25159a69eb3264cb7179082fe6ffce16126b"
        },
        "date": 1650985417517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6455807745487593,
            "unit": "iter/sec",
            "range": "stddev: 0.009333597564409836",
            "extra": "mean: 1.5489928439999914 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.110828960054192,
            "unit": "iter/sec",
            "range": "stddev: 0.007821850869459548",
            "extra": "mean: 98.90385881818341 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96d8d0f937dbffc867f0d49d66f5c40b36bb431d",
          "message": "TST: Add Test for ASCII85Decode (#825)\n\nFull credit to\r\nhttps://github.com/py-pdf/PyPDF2/pull/817/commits/6dc90b1e64c1965b61aa2561ce912f64ca19cad4\r\n\r\nCo-authored-by: Acsor <nildexo@yandex.com>",
          "timestamp": "2022-04-26T18:20:09+02:00",
          "tree_id": "02a47e5754b4e83a52ebb6301118b24d837ef7ed",
          "url": "https://github.com/py-pdf/PyPDF2/commit/96d8d0f937dbffc867f0d49d66f5c40b36bb431d"
        },
        "date": 1650990044230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6541198244177866,
            "unit": "iter/sec",
            "range": "stddev: 0.003829907124529457",
            "extra": "mean: 1.5287718896000002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.085985833131874,
            "unit": "iter/sec",
            "range": "stddev: 0.0006931207886781686",
            "extra": "mean: 99.1474721999964 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "355f805f30e493cda2af134ccb768edccf3ff0ab",
          "message": "DEV: Ignore IronPython parts for code coverage (#826)\n\nI have no idea how to test for that in GithubActions.\r\nAs this likely only affects a small fraction of PyPDF2 users,\r\nI want to ignore it for now.\r\n\r\nFeel free to add a PR that adds IronPython to GithubActions -\r\nthen we can enable this again.",
          "timestamp": "2022-04-26T18:30:53+02:00",
          "tree_id": "c399e5e719e31fdc84ae2cd3b91082c21b3bb121",
          "url": "https://github.com/py-pdf/PyPDF2/commit/355f805f30e493cda2af134ccb768edccf3ff0ab"
        },
        "date": 1650990689658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.652312710979302,
            "unit": "iter/sec",
            "range": "stddev: 0.008901747430670692",
            "extra": "mean: 1.5330070734000003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.376939144749729,
            "unit": "iter/sec",
            "range": "stddev: 0.0060005167688021105",
            "extra": "mean: 96.36753054545527 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f90a9d7140a9cddcc60cc1f17a695ca2b363af39",
          "message": "TST: Add tests for utils, form fields, PageRange (#827)\n\ngetFormTextFields now return an empty dict instead of throwing an exception if no form fields are found. This should eliminate an error source",
          "timestamp": "2022-04-26T22:20:02+02:00",
          "tree_id": "4e8432ad79fb24f91acc3e0cf86d42a6259aff1d",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f90a9d7140a9cddcc60cc1f17a695ca2b363af39"
        },
        "date": 1651004444445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5339640513290262,
            "unit": "iter/sec",
            "range": "stddev: 0.012493021925103417",
            "extra": "mean: 1.8727852511999998 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.75920949734288,
            "unit": "iter/sec",
            "range": "stddev: 0.00284369106426063",
            "extra": "mean: 114.16555344444627 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35086b6e2c0b45ce4b80e2581e8b27cd12a6d373",
          "message": "STY: Remove debug code (#828)",
          "timestamp": "2022-04-27T08:03:14+02:00",
          "tree_id": "9c32fdaceaabf28b00855dfe80d3eabb7b10481b",
          "url": "https://github.com/py-pdf/PyPDF2/commit/35086b6e2c0b45ce4b80e2581e8b27cd12a6d373"
        },
        "date": 1651039434526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5350829750413725,
            "unit": "iter/sec",
            "range": "stddev: 0.031613512699053894",
            "extra": "mean: 1.8688690289999983 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.653130659753275,
            "unit": "iter/sec",
            "range": "stddev: 0.004827429409492978",
            "extra": "mean: 115.56511039999862 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4083478+pubpub-zz@users.noreply.github.com",
            "name": "pubpub-zz",
            "username": "pubpub-zz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "904b0df5a2d840d0ef0d1db52c7ee6a114664594",
          "message": "ROB: Fix corruption in startxref or xref table (#788)\n\nUse PdfReadWarning instead of UserWarning to be consistent\r\n\r\nCloses #297",
          "timestamp": "2022-04-27T13:30:31+02:00",
          "tree_id": "9b911b76a3f9a819ee0ca14a104336eeb0bd51db",
          "url": "https://github.com/py-pdf/PyPDF2/commit/904b0df5a2d840d0ef0d1db52c7ee6a114664594"
        },
        "date": 1651059070812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6500721455982809,
            "unit": "iter/sec",
            "range": "stddev: 0.006260350447390519",
            "extra": "mean: 1.5382907986000078 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.383048126671477,
            "unit": "iter/sec",
            "range": "stddev: 0.005338950545449663",
            "extra": "mean: 96.31083163635233 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd775d34d9ccf8f77596ca9e82944c869901ac0f",
          "message": "MAINT: Refactoring after #788 (#830)\n\nThis refactoring aims at making maintenance easier:\r\n\r\n1. Too long functions make it hard to grasp the overall behavior. Hence the _get_xref_issues function was split out\r\n2. `_get_xref_issues` is made a static method of the PdfFileReader to show that it belongs to the reader, but doesn't require any of its attributes\r\n3. `_get_xref_issues` makes use of an integer return value instead of raising + catching exceptions. \r\n4. `_rebuild_xref_table` was moved to a method for the same reason.",
          "timestamp": "2022-04-27T17:44:09+02:00",
          "tree_id": "beff2babbf9ba4905400267caa89d4e7ddc069ac",
          "url": "https://github.com/py-pdf/PyPDF2/commit/fd775d34d9ccf8f77596ca9e82944c869901ac0f"
        },
        "date": 1651074294887,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6534127715275444,
            "unit": "iter/sec",
            "range": "stddev: 0.0030763372688520432",
            "extra": "mean: 1.5304261618 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.089517366180937,
            "unit": "iter/sec",
            "range": "stddev: 0.0008623789855637931",
            "extra": "mean: 99.11276860000271 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "cb32323a4c2581c0a0c395bbe2320b6ca776c67d",
          "message": "DOC: History of PyPDF2",
          "timestamp": "2022-04-27T17:49:59+02:00",
          "tree_id": "e10220d86b8ceea20c75cbe0939d7972bdabee71",
          "url": "https://github.com/py-pdf/PyPDF2/commit/cb32323a4c2581c0a0c395bbe2320b6ca776c67d"
        },
        "date": 1651074640781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6502136222433015,
            "unit": "iter/sec",
            "range": "stddev: 0.003251982470534682",
            "extra": "mean: 1.5379560897999967 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.026016520294906,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580678769596281",
            "extra": "mean: 99.74050989999625 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcd1aed0f762d5c26eba9bcdff4eb8e0eb39ca8f",
          "message": "TST: Add tests for PyPDF2.generic (#831)\n\n* BUG: StopIteration got deprecated in Python 3.7, see PEP 479\r\n* STY: Use property decorator\r\n\r\nCo-authored-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-04-28T10:39:51+02:00",
          "tree_id": "3a9c71f52bc2f5e6cee461016ef1d1ad21078f00",
          "url": "https://github.com/py-pdf/PyPDF2/commit/fcd1aed0f762d5c26eba9bcdff4eb8e0eb39ca8f"
        },
        "date": 1651135253971,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5520707881894535,
            "unit": "iter/sec",
            "range": "stddev: 0.018268466912576466",
            "extra": "mean: 1.811361914800011 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.792815022718578,
            "unit": "iter/sec",
            "range": "stddev: 0.0010336042124188555",
            "extra": "mean: 113.72922066667319 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "865d74433e2b776ee131663f984e52dc083dca70",
          "message": "MAINT: Update requirements files",
          "timestamp": "2022-04-28T11:02:26+02:00",
          "tree_id": "4f0d14b4f16561868c2203cb124fb3c6afa0e446",
          "url": "https://github.com/py-pdf/PyPDF2/commit/865d74433e2b776ee131663f984e52dc083dca70"
        },
        "date": 1651136596364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6415824680643019,
            "unit": "iter/sec",
            "range": "stddev: 0.006028124875887984",
            "extra": "mean: 1.5586460818000034 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.189942048271186,
            "unit": "iter/sec",
            "range": "stddev: 0.006762608643911026",
            "extra": "mean: 98.13598499999898 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eef03d935dfeacaa75848b39082cf94d833d3174",
          "message": "STY: Apply pre-commit (black, isort) + use snake_case variables (#832)\n\nThis change standardizes the code formatting quite a bit.\r\nHaving standardized formatting makes the code easier to read\r\nand reduces the diff.\r\n\r\nThis includes:\r\n\r\n* Applying the black auto-formatter (also in the docs)\r\n* Applying isort for import sorting\r\n* Making sure that files end with a newline\r\n\r\nAdditionally, in several places the property function call style was replaced by the decorator style",
          "timestamp": "2022-04-28T11:53:18+02:00",
          "tree_id": "93562802485ae6a26ff05fad3cf13e3a33bdb00a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/eef03d935dfeacaa75848b39082cf94d833d3174"
        },
        "date": 1651139639035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.744978809967256,
            "unit": "iter/sec",
            "range": "stddev: 0.0047688953823038305",
            "extra": "mean: 1.3423200587999986 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 11.643426095476853,
            "unit": "iter/sec",
            "range": "stddev: 0.005384084734819235",
            "extra": "mean: 85.88537358333663 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1dfdaa475c8705c45d82305f2d2ec76168e7e30",
          "message": "TST: Reader and page properties (#835)",
          "timestamp": "2022-04-28T12:45:14+02:00",
          "tree_id": "4cf4b3c640d71220342496b9bb66ef1ee07d06ea",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c1dfdaa475c8705c45d82305f2d2ec76168e7e30"
        },
        "date": 1651142754261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5525941267582756,
            "unit": "iter/sec",
            "range": "stddev: 0.004335068924803803",
            "extra": "mean: 1.8096464503999983 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.918099518311225,
            "unit": "iter/sec",
            "range": "stddev: 0.0013836104991058473",
            "extra": "mean: 112.13151388888794 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1408f7488f2df54341b1208f2ad0a1b14eb8e81",
          "message": "MAINT: Split pdf module (#836)",
          "timestamp": "2022-04-28T14:40:53+02:00",
          "tree_id": "0620d6908a07c4249190ebf5952edde1bd138176",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e1408f7488f2df54341b1208f2ad0a1b14eb8e81"
        },
        "date": 1651149694527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6511333754112755,
            "unit": "iter/sec",
            "range": "stddev: 0.005939225208470314",
            "extra": "mean: 1.5357836623999959 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.28649261251013,
            "unit": "iter/sec",
            "range": "stddev: 0.006082521245230465",
            "extra": "mean: 97.21486590908833 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c7d6e8bc1908dd179383397a605133cf1d83939",
          "message": "TST: swap incorrect test names (#838)",
          "timestamp": "2022-04-28T16:11:12+02:00",
          "tree_id": "3981c3cda471e4d14157fb0b97f1aac4b93cdec7",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5c7d6e8bc1908dd179383397a605133cf1d83939"
        },
        "date": 1651155110130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6615813811562604,
            "unit": "iter/sec",
            "range": "stddev: 0.0046065495210667684",
            "extra": "mean: 1.5115298412000016 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.00428368875864,
            "unit": "iter/sec",
            "range": "stddev: 0.004433978733442472",
            "extra": "mean: 99.95718145454578 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e86977813d9714e9383a5b2801e26d57a16a86d",
          "message": "ROB: warn-only in readStringFromStream (#837)\n\nAn unexpected escape string was raising a PdfReadError before.\r\nNow, only a warning is issued.\r\n\r\nCloses #360\r\nCloses #794 : Passing the strict parameter looks like a good idea,\r\n              but there is also the pdf parameter. Sadly, it is\r\n              None for that issue.",
          "timestamp": "2022-04-28T16:18:18+02:00",
          "tree_id": "8059010d5156444397416dc2e9b56b64e45f5437",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5e86977813d9714e9383a5b2801e26d57a16a86d"
        },
        "date": 1651155537175,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6544444290869603,
            "unit": "iter/sec",
            "range": "stddev: 0.0032139339956374427",
            "extra": "mean: 1.5280136182000006 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.13957595768099,
            "unit": "iter/sec",
            "range": "stddev: 0.0007348270835737484",
            "extra": "mean: 98.62345370000156 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4083478+pubpub-zz@users.noreply.github.com",
            "name": "pubpub-zz",
            "username": "pubpub-zz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fe9e6ef0e547a044cfa7ec6df6e76452cc09c10",
          "message": "ROB: Handle missing destinations in reader (#840)\n\nIf a destination is missing, getDestinationPageNumber now returns -1\r\nIf `strict=False`, the first page is used as a fallback.\r\n\r\nThe code triggering the exception was\r\n\r\n```python\r\nfrom PyPDF2 import PdfFileReader\r\n\r\n# https://github.com/mstamy2/PyPDF2/files/6045010/thyroid.pdf\r\nwith open(\"thyroid.pdf\", \"rb\") as f:\r\n   reader = PdfFileReader(f)\r\n   bookmarks = pdf.getOutlines()\r\n   for b in bookmarks:\r\n       print(reader.getDestinationPageNumber(b) + 1)  # page count starts from 0\r\n```\r\n\r\nThe error message was:\r\n    PyPDF2.utils.PdfReadError: Unknown Destination Type: 0\r\n\r\nCloses #604 \r\nCloses #821",
          "timestamp": "2022-04-30T20:13:24+02:00",
          "tree_id": "5db3305fbfb9b628d599904682d8f840cd1734f5",
          "url": "https://github.com/py-pdf/PyPDF2/commit/3fe9e6ef0e547a044cfa7ec6df6e76452cc09c10"
        },
        "date": 1651342444178,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6549521794964375,
            "unit": "iter/sec",
            "range": "stddev: 0.006425753643669064",
            "extra": "mean: 1.5268290286000024 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.295506195647757,
            "unit": "iter/sec",
            "range": "stddev: 0.006403111875990784",
            "extra": "mean: 97.12975554545653 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "444fca22836df061d9d23e71ffb7d68edcdfa766",
          "message": "STY: Documentation, Variable names (#839)\n\n* pytest style\r\n* use more constants",
          "timestamp": "2022-04-30T20:19:26+02:00",
          "tree_id": "13153ced2b968d63d1003bb6128dd3e12f7b2fd7",
          "url": "https://github.com/py-pdf/PyPDF2/commit/444fca22836df061d9d23e71ffb7d68edcdfa766"
        },
        "date": 1651342801039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.7273790759126576,
            "unit": "iter/sec",
            "range": "stddev: 0.0041930713218297855",
            "extra": "mean: 1.3747989640000013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 11.613264540689384,
            "unit": "iter/sec",
            "range": "stddev: 0.005972794829883468",
            "extra": "mean: 86.10843200000318 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ed8e593bedeca0cc6283f9d4894a45c7a85323",
          "message": "MAINT: Separated CCITTFax param parsing/decoding (#841)\n\n* BUG: Changed default /K to conform with the PDF 1.7 standard\r\n* TST: Add test for CCITTFax\r\n* TST: Add test for TextStringObject\r\n\r\nSTY:\r\n* Group Python 2.7 imports\r\n* camelCase variables to snake_case\r\n* Apply black formatter",
          "timestamp": "2022-05-01T10:55:00+02:00",
          "tree_id": "c8e20b34d7d1b7804daf4ed0e385cb99d5d02205",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d2ed8e593bedeca0cc6283f9d4894a45c7a85323"
        },
        "date": 1651395337855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6595642448645689,
            "unit": "iter/sec",
            "range": "stddev: 0.0027934216538311064",
            "extra": "mean: 1.5161525322000045 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.03107597243035,
            "unit": "iter/sec",
            "range": "stddev: 0.004474913223608447",
            "extra": "mean: 99.69020299999958 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7592257855b619d1d13752afac052147377a3c3f",
          "message": "DOC: Project Governance (#799)\n\nThank you Matthew for your support / suggestions!\r\n\r\nCo-authored-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-05-01T10:56:30+02:00",
          "tree_id": "dd41e47f40b1052d0966d687b88e2020d3ef7297",
          "url": "https://github.com/py-pdf/PyPDF2/commit/7592257855b619d1d13752afac052147377a3c3f"
        },
        "date": 1651395428249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5730060597961345,
            "unit": "iter/sec",
            "range": "stddev: 0.018179231162042064",
            "extra": "mean: 1.745182241799995 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.116730914362284,
            "unit": "iter/sec",
            "range": "stddev: 0.0012190247077632514",
            "extra": "mean: 109.6884408888962 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "be6cdd8864075ba08e789c2b5b0b83b16fc6ea9e",
          "message": "DEV: Add benchmark command to Makefile",
          "timestamp": "2022-05-01T11:08:03+02:00",
          "tree_id": "57cc50e2e0749d944b412c468589ae5a1beaaccb",
          "url": "https://github.com/py-pdf/PyPDF2/commit/be6cdd8864075ba08e789c2b5b0b83b16fc6ea9e"
        },
        "date": 1651396126499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5648025130939326,
            "unit": "iter/sec",
            "range": "stddev: 0.028904580240274903",
            "extra": "mean: 1.7705303656000013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.228001369841428,
            "unit": "iter/sec",
            "range": "stddev: 0.004177987880058724",
            "extra": "mean: 108.36582700000008 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "def7a629ad4e1341dfdd68f6c7f56c111f1ee5c6",
          "message": "REL: 1.27.10\n\nRobustness (ROB):\n-  Handle missing destinations in reader (#840)\n-  warn-only in readStringFromStream (#837)\n-  Fix corruption in startxref or xref table (#788 and #830)\n\nDocumentation (DOC):\n-  Project Governance (#799)\n-  History of PyPDF2\n-  PDF feature/version support (#816)\n-  More details on text parsing issues (#815)\n\nDeveloper Experience (DEV):\n-  Add benchmark command to Makefile\n-  Ignore IronPython parts for code coverage (#826)\n\nMaintenance (MAINT):\n-  Split pdf module (#836)\n-  Separated CCITTFax param parsing/decoding (#841)\n-  Update requirements files\n\nTesting (TST):\n-  Use external repository for larger/more PDFs for testing (#820)\n-  Swap incorrect test names (#838)\n-  Add test for PdfFileReader and page properties (#835)\n-  Add tests for PyPDF2.generic (#831)\n-  Add tests for utils, form fields, PageRange (#827)\n-  Add test for ASCII85Decode (#825)\n-  Add test for FlateDecode (#823)\n-  Add test for filters.ASCIIHexDecode (#822)\n\nCode Style (STY):\n-  Apply pre-commit (black, isort) + use snake_case variables (#832)\n-  Remove debug code (#828)\n-  Documentation, Variable names (#839)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.27.9...1.27.10",
          "timestamp": "2022-05-01T11:15:33+02:00",
          "tree_id": "a6ba2d1fde8e3e3f583d447470fcf0f92c852334",
          "url": "https://github.com/py-pdf/PyPDF2/commit/def7a629ad4e1341dfdd68f6c7f56c111f1ee5c6"
        },
        "date": 1651396574859,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6616531682541348,
            "unit": "iter/sec",
            "range": "stddev: 0.0035949971699881533",
            "extra": "mean: 1.5113658454000016 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.943860974640522,
            "unit": "iter/sec",
            "range": "stddev: 0.0047829961485161675",
            "extra": "mean: 100.56455963636908 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c96489d789c18170ba9ff8d9aa852efab1037d96",
          "message": "BUG: Incorrectly issued xref warning/exception (#855)\n\nCloses #852",
          "timestamp": "2022-05-02T08:44:00+02:00",
          "tree_id": "2e9cf604a84066f36193d6c25ee3447bb6dcf0d0",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c96489d789c18170ba9ff8d9aa852efab1037d96"
        },
        "date": 1651473878291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6619677017339488,
            "unit": "iter/sec",
            "range": "stddev: 0.003690628561990942",
            "extra": "mean: 1.5106477210000038 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.986055372417564,
            "unit": "iter/sec",
            "range": "stddev: 0.004534714433574842",
            "extra": "mean: 100.13964099999839 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "998d5bad34956524abb5017ca98eb98e78f977ce",
          "message": "REL: 1.27.11\n\nBug Fixes (BUG):\n-  Incorrectly issued xref warning/exception (#855)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.27.10...1.27.11",
          "timestamp": "2022-05-02T08:46:14+02:00",
          "tree_id": "b5dc8606d281db02f295fd0b3f2644f7497c2440",
          "url": "https://github.com/py-pdf/PyPDF2/commit/998d5bad34956524abb5017ca98eb98e78f977ce"
        },
        "date": 1651474058223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6528417792666815,
            "unit": "iter/sec",
            "range": "stddev: 0.008126007738070226",
            "extra": "mean: 1.531764712000006 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.203348666866178,
            "unit": "iter/sec",
            "range": "stddev: 0.006634021469313385",
            "extra": "mean: 98.00703990909844 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "955da9922f93e909110f083a4ddd422778265cfa",
          "message": "DOC: Security Policy",
          "timestamp": "2022-05-02T13:27:33+02:00",
          "tree_id": "ff07b8cf1d83ab13e45a4dc0ae7cb7665100c510",
          "url": "https://github.com/py-pdf/PyPDF2/commit/955da9922f93e909110f083a4ddd422778265cfa"
        },
        "date": 1651490903091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5549167864033904,
            "unit": "iter/sec",
            "range": "stddev: 0.043146079989043136",
            "extra": "mean: 1.8020719944000063 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.942439011681005,
            "unit": "iter/sec",
            "range": "stddev: 0.004484850855279719",
            "extra": "mean: 111.82631479999543 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48d5f0ca3e702da1460107dbe7d90ccdd60a4c1f",
          "message": "BUG: _rebuild_xref_table expects trailer to be a dict (#857)\n\nThis caused:\r\n    AttributeError: 'FloatObject' object has no attribute 'items'\r\n\r\nCloses #856\r\n\r\nCo-authored-by: pubpub-zz <4083478+pubpub-zz@users.noreply.github.com>",
          "timestamp": "2022-05-02T21:06:20+02:00",
          "tree_id": "f67c717266a4e5080a449700dc88c806e776f63a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/48d5f0ca3e702da1460107dbe7d90ccdd60a4c1f"
        },
        "date": 1651518420900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5464325263471695,
            "unit": "iter/sec",
            "range": "stddev: 0.007997181509643857",
            "extra": "mean: 1.830052114000003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.927549861794354,
            "unit": "iter/sec",
            "range": "stddev: 0.0010864594569718394",
            "extra": "mean: 112.0128160000004 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "f3cb316f0135bc4f761e78086effa66e1652b2e4",
          "message": "REL: 1.27.12\n\nBug Fixes (BUG):\n-  _rebuild_xref_table expects trailer to be a dict (#857)\n\nDocumentation (DOC):\n-  Security Policy\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.27.11...1.27.12",
          "timestamp": "2022-05-02T21:10:50+02:00",
          "tree_id": "7d28a3654698edfcf47b451f055bec5039d6118d",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f3cb316f0135bc4f761e78086effa66e1652b2e4"
        },
        "date": 1651518714191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6517502234565721,
            "unit": "iter/sec",
            "range": "stddev: 0.011350903544595869",
            "extra": "mean: 1.5343301222000008 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.248858811233584,
            "unit": "iter/sec",
            "range": "stddev: 0.006084210437525165",
            "extra": "mean: 97.57183881818321 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a791ef16c009bcf528fba2e566cc58b5d18dc4f4",
          "message": "MAINT: Remove IronPython Fallback for zlib (#868)\n\nSee https://github.com/py-pdf/PyPDF2/discussions/863",
          "timestamp": "2022-05-09T22:20:34+02:00",
          "tree_id": "e73c854d078a066be3190333e77505b517005268",
          "url": "https://github.com/py-pdf/PyPDF2/commit/a791ef16c009bcf528fba2e566cc58b5d18dc4f4"
        },
        "date": 1652127673196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6529593825268383,
            "unit": "iter/sec",
            "range": "stddev: 0.004686145907465022",
            "extra": "mean: 1.531488828800002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.199708238087558,
            "unit": "iter/sec",
            "range": "stddev: 0.006640646404993513",
            "extra": "mean: 98.04202009090996 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c66ee8cf01a9ef5984bdc5a8eb612227ede413ab",
          "message": "DEP: PEP8-style module, class, and method names (#867)\n\nThis commit strives to make the usage for new PyPDF2 users easier by following\r\nPEP8 naming schemes. It's mostly about camelCase method names being converted to\r\nsnake_case. Other changes make the public interface of PyPDF2 smaller and thus\r\neasier to discover.\r\n\r\nThis commit does not introduce any breaking changes as the old modules /\r\nclasses / method signatures are still present. They have now deprecation\r\nwarnings and the docs show that those are considered deprecated.\r\n\r\nIf a property and a getter-method are both present, use the property.\r\n\r\nModule level changes\r\n--------------------\r\n\r\n- utils ➔ _utils: The module is renamed to '_utils' to indicate that it should\r\n                not be used by PyPDF2 users. It's only meant for PyPDF2 itself.\r\n- The 'pdf' module was removed. Most classes / functions are now either in\r\n  '_utils' or in 'generic'.\r\n\r\n\r\nCore classes\r\n------------\r\n\r\n- PdfFileReader➔ PdfReader (strict=False is new default)\r\n- PdfFileWriter➔ PdfWriter\r\n- PdfFileMerger➔ PdfMerger (strict=False is new default)\r\n\r\nPdfReader\r\n---------\r\n\r\n- writer.getPage(pageNumber) ➔ writer.pages[page_number]\r\n- writer.getNumPages() ➔ len(writer.pages)\r\n- getPageLayout / pageLayout ➔ page_layout\r\n- getPageMode / pageMode ➔ page_mode\r\n- getIsEncrypted / isEncrypted ➔ is_encrypted\r\n- getDocumentInfo ➔ metadata\r\n\r\nPdfWriter\r\n---------\r\n\r\n- writer.getPage(pageNumber) ➔ writer.pages[page_number]\r\n- writer.getNumPages() ➔ len(writer.pages)\r\n- getPageLayout / setPageLayout / pageLayout ➔ page_layout\r\n- getPageMode / setPageMode / pageMode ➔ page_mode\r\n\r\nPage\r\n----\r\n\r\n- mediabox / trimbox / cropbox / bleedbox / artbox:\r\n    - getWidth, getHeight  ➔ width / height\r\n    - getLowerLeft_x / getUpperLeft_x ➔ left\r\n    - getUpperRight_x / getLowerRight_x ➔ right\r\n    - getLowerLeft_y / getLowerRight_y ➔ bottom\r\n    - getUpperRight_y / getUpperLeft_y ➔ top\r\n    - getLowerLeft / setLowerLeft ➔ lower_left property\r\n    - upperRight ➔ upper_right\r\n- Add Transformation class to make it easy to create transformation matrices\r\n- add_transformation and merge_page should be used instead of:\r\n    - mergeTransformedPage\r\n    - mergeScaledPage\r\n    - mergeRotatedPage\r\n    - mergeTranslatedPage\r\n    - mergeRotatedTranslatedPage\r\n    - mergeRotatedScaledPage\r\n    - mergeScaledTranslatedPage\r\n    - mergeRotatedScaledTranslatedPage\r\n\r\nSee the CHANGELOG for a full list of changes",
          "timestamp": "2022-05-22T14:20:05+02:00",
          "tree_id": "42eab87f3de9a4c4c8e530a4fcc0e0124872bbd3",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c66ee8cf01a9ef5984bdc5a8eb612227ede413ab"
        },
        "date": 1653222044026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6599236178218959,
            "unit": "iter/sec",
            "range": "stddev: 0.010464724886038564",
            "extra": "mean: 1.515326884800001 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.119673911318733,
            "unit": "iter/sec",
            "range": "stddev: 0.005340151061360368",
            "extra": "mean: 98.81741336363734 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "a214c9ee83605eec0ef52b1990786b909f7fbc1b",
          "message": "REL: 1.28.0\n\nThis release adds a lot of deprecation warnings in preparation of the\nPyPDF2 2.0.0 release. The changes are mostly using snake_case function-, method-,\nand variable-names as well as using properties instead of getter-methods.\n\nMaintenance (MAINT):\n-  Remove IronPython Fallback for zlib (#868)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.27.12...1.27.13\n\n* Make the `PyPDF2.utils` module private\n* Rename of core classes:\n  * PdfFileReader ➔ PdfReader\n  * PdfFileWriter ➔ PdfWriter\n  * PdfFileMerger ➔ PdfMerger\n* Use PEP8 conventions for function names and parameters\n* If a property and a getter-method are both present, use the property\n\nIn many places:\n  - getObject ➔ get_object\n  - writeToStream ➔ write_to_stream\n  - readFromStream ➔ read_from_stream\n\nPyPDF2.generic\n  - readObject ➔ read_object\n  - convertToInt ➔ convert_to_int\n  - DocumentInformation.getText ➔ DocumentInformation._get_text :\n    This method should typically not be used; please let me know if you need it.\n\nPdfReader class:\n  - `reader.getPage(pageNumber)` ➔ `reader.pages[page_number]`\n  - `reader.getNumPages()` / `reader.numPages` ➔ `len(reader.pages)`\n  - getDocumentInfo ➔ metadata\n  - flattenedPages attribute ➔ flattened_pages\n  - resolvedObjects attribute ➔ resolved_objects\n  - xrefIndex attribute ➔ xref_index\n  - getNamedDestinations / namedDestinations attribute ➔ named_destinations\n  - getPageLayout / pageLayout ➔ page_layout attribute\n  - getPageMode / pageMode ➔ page_mode attribute\n  - getIsEncrypted / isEncrypted ➔ is_encrypted attribute\n  - getOutlines ➔ get_outlines\n  - readObjectHeader ➔ read_object_header (TODO: read vs get?)\n  - cacheGetIndirectObject ➔ cache_get_indirect_object (TODO: public vs private?)\n  - cacheIndirectObject ➔ cache_indirect_object (TODO: public vs private?)\n  - getDestinationPageNumber ➔ get_destination_page_number\n  - readNextEndLine ➔ read_next_end_line\n  - _zeroXref ➔ _zero_xref\n  - _authenticateUserPassword ➔ _authenticate_user_password\n  - _pageId2Num attribute ➔ _page_id2num\n  - _buildDestination ➔ _build_destination\n  - _buildOutline ➔ _build_outline\n  - _getPageNumberByIndirect(indirectRef) ➔ _get_page_number_by_indirect(indirect_ref)\n  - _getObjectFromStream ➔ _get_object_from_stream\n  - _decryptObject ➔ _decrypt_object\n  - _flatten(..., indirectRef) ➔ _flatten(..., indirect_ref)\n  - _buildField ➔ _build_field\n  - _checkKids ➔ _check_kids\n  - _writeField ➔ _write_field\n  - _write_field(..., fieldAttributes) ➔ _write_field(..., field_attributes)\n  - _read_xref_subsections(..., getEntry, ...) ➔ _read_xref_subsections(..., get_entry, ...)\n\nPdfWriter class:\n  - `writer.getPage(pageNumber)` ➔ `writer.pages[page_number]`\n  - `writer.getNumPages()` ➔ `len(writer.pages)`\n  - addMetadata ➔ add_metadata\n  - addPage ➔ add_page\n  - addBlankPage ➔ add_blank_page\n  - addAttachment(fname, fdata) ➔ add_attachment(filename, data)\n  - insertPage ➔ insert_page\n  - insertBlankPage ➔ insert_blank_page\n  - appendPagesFromReader ➔ append_pages_from_reader\n  - updatePageFormFieldValues ➔ update_page_form_field_values\n  - cloneReaderDocumentRoot ➔ clone_reader_document_root\n  - cloneDocumentFromReader ➔ clone_document_from_reader\n  - getReference ➔ get_reference\n  - getOutlineRoot ➔ get_outline_root\n  - getNamedDestRoot ➔ get_named_dest_root\n  - addBookmarkDestination ➔ add_bookmark_destination\n  - addBookmarkDict ➔ add_bookmark_dict\n  - addBookmark ➔ add_bookmark\n  - addNamedDestinationObject ➔ add_named_destination_object\n  - addNamedDestination ➔ add_named_destination\n  - removeLinks ➔ remove_links\n  - removeImages(ignoreByteStringObject) ➔ remove_images(ignore_byte_string_object)\n  - removeText(ignoreByteStringObject) ➔ remove_text(ignore_byte_string_object)\n  - addURI ➔ add_uri\n  - addLink ➔ add_link\n  - getPage(pageNumber) ➔ get_page(page_number)\n  - getPageLayout / setPageLayout / pageLayout ➔ page_layout attribute\n  - getPageMode / setPageMode / pageMode ➔ page_mode attribute\n  - _addObject ➔ _add_object\n  - _addPage ➔ _add_page\n  - _sweepIndirectReferences ➔ _sweep_indirect_references\n\nPdfMerger class\n  - `__init__` parameter: strict=True ➔ strict=False (the PdfFileMerger still has the old default)\n  - addMetadata ➔ add_metadata\n  - addNamedDestination ➔ add_named_destination\n  - setPageLayout ➔ set_page_layout\n  - setPageMode ➔ set_page_mode\n\nPage class:\n  - artBox / bleedBox/ cropBox/ mediaBox / trimBox ➔ artbox / bleedbox/ cropbox/ mediabox / trimbox\n    - getWidth, getHeight  ➔ width / height\n    - getLowerLeft_x / getUpperLeft_x ➔ left\n    - getUpperRight_x / getLowerRight_x ➔ right\n    - getLowerLeft_y / getLowerRight_y ➔ bottom\n    - getUpperRight_y / getUpperLeft_y ➔ top\n    - getLowerLeft / setLowerLeft ➔ lower_left property\n    - upperRight ➔ upper_right\n  - mergePage ➔ merge_page\n  - rotateClockwise / rotateCounterClockwise ➔ rotate_clockwise\n  - _mergeResources ➔ _merge_resources\n  - _contentStreamRename ➔ _content_stream_rename\n  - _pushPopGS ➔ _push_pop_gs\n  - _addTransformationMatrix ➔ _add_transformation_matrix\n  - _mergePage ➔ _merge_page\n\nXmpInformation class:\n  - getElement(..., aboutUri, ...) ➔ get_element(..., about_uri, ...)\n  - getNodesInNamespace(..., aboutUri, ...) ➔ get_nodes_in_namespace(..., aboutUri, ...)\n  - _getText ➔ _get_text\n\nutils.py:\n  - matrixMultiply ➔ matrix_multiply\n  - RC4_encrypt is moved to the security module",
          "timestamp": "2022-05-22T17:27:20+02:00",
          "tree_id": "8428e9bdfa47db0fc96802dea7a440e3b6635807",
          "url": "https://github.com/py-pdf/PyPDF2/commit/a214c9ee83605eec0ef52b1990786b909f7fbc1b"
        },
        "date": 1653233327515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5019163662253934,
            "unit": "iter/sec",
            "range": "stddev: 0.0424229428461148",
            "extra": "mean: 1.9923638026000021 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.030111690231465,
            "unit": "iter/sec",
            "range": "stddev: 0.0024678264836649672",
            "extra": "mean: 124.53126912499712 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "560d2a7d63d6038b36401af794e1c41187c71710",
          "message": "MAINT: Remove duplicate warnings imports (#888)",
          "timestamp": "2022-05-22T21:05:14+02:00",
          "tree_id": "2cc6ee7eb85291f54ffe2a3b186e11052bec1f14",
          "url": "https://github.com/py-pdf/PyPDF2/commit/560d2a7d63d6038b36401af794e1c41187c71710"
        },
        "date": 1653246357077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.4807529335221447,
            "unit": "iter/sec",
            "range": "stddev: 0.027920571749779174",
            "extra": "mean: 2.0800705107999873 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.218363597837061,
            "unit": "iter/sec",
            "range": "stddev: 0.003874427666178201",
            "extra": "mean: 138.53555400002904 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce1cb6697f9db60c5188624e56da1c676b1733f5",
          "message": "BUG: Incorrectly show deprecation warnings on internal usage (#887)",
          "timestamp": "2022-05-22T21:09:29+02:00",
          "tree_id": "4a67d62b70feac3bb3c63c66eded8d307164da7f",
          "url": "https://github.com/py-pdf/PyPDF2/commit/ce1cb6697f9db60c5188624e56da1c676b1733f5"
        },
        "date": 1653246626985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5064319620757102,
            "unit": "iter/sec",
            "range": "stddev: 0.1197135605168158",
            "extra": "mean: 1.974598909400001 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.56222227677507,
            "unit": "iter/sec",
            "range": "stddev: 0.009266148921254243",
            "extra": "mean: 116.79210929999897 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f74d733ae5e93b2fa73e912754c9158f6018d851",
          "message": "MAINT: Add stacklevel=2 to deprecation warnings (#889)\n\n* STY: Adjust code/docs in several places to make it more similar to the 2.0.0 branch\r\n* MAINT: Remove excessive <py36 warnings",
          "timestamp": "2022-05-22T21:44:31+02:00",
          "tree_id": "d99fa7a659ed8b2e1c4b8c2be88325447fde672c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f74d733ae5e93b2fa73e912754c9158f6018d851"
        },
        "date": 1653248707485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6584098089297077,
            "unit": "iter/sec",
            "range": "stddev: 0.007816245602955785",
            "extra": "mean: 1.5188109084000003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.522844651050827,
            "unit": "iter/sec",
            "range": "stddev: 0.0009774204855581411",
            "extra": "mean: 105.0106387999989 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "000ac498ecc9343c11b89a785314b72730419818",
          "message": "REL: 1.28.1\n\nBug Fixes (BUG):\n-  Incorrectly show deprecation warnings on internal usage (#887)\n\nMaintenance (MAINT):\n-  Add stacklevel=2 to deprecation warnings (#889)\n-  Remove duplicate warnings imports (#888)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.28.0...1.28.1",
          "timestamp": "2022-05-22T21:52:56+02:00",
          "tree_id": "71669813a6c12b4757f2588a0336cb4336aadc0e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/000ac498ecc9343c11b89a785314b72730419818"
        },
        "date": 1653249243477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6625144684497531,
            "unit": "iter/sec",
            "range": "stddev: 0.009516052739706142",
            "extra": "mean: 1.5094009982000003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.558250576948518,
            "unit": "iter/sec",
            "range": "stddev: 0.0009916151322350054",
            "extra": "mean: 104.62165559999903 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68c9202a456c0193ab2e4fc8a66b2c3ec70b91e4",
          "message": "BUG: Fix deprecation warning on using PdfMerger (#891)\n\nFixes a deprecation warning being raised when trying to use the PdfMerger class. This regression of #887 is caused by #889 which reversed the changes done to the PyPDF2/merger.py module so that it once again used the deprecated user-facing isString method as opposed to the internal _isString method.\r\n\r\nAdditionally, this PR fixes the deprecation warning raised by referencing reader.namedDestinations as opposed to reader.named_destinations.\r\n\r\nCloses #890",
          "timestamp": "2022-05-23T13:27:38+02:00",
          "tree_id": "550d2e550045da3b18574419d3f540f0221b0de4",
          "url": "https://github.com/py-pdf/PyPDF2/commit/68c9202a456c0193ab2e4fc8a66b2c3ec70b91e4"
        },
        "date": 1653305301488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6630140442381052,
            "unit": "iter/sec",
            "range": "stddev: 0.005091146774385556",
            "extra": "mean: 1.5082636766000008 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.511981827358483,
            "unit": "iter/sec",
            "range": "stddev: 0.0011029492997410102",
            "extra": "mean: 105.13056250000261 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9947c7b51f9e413458cc91eca2a1250829662fea",
          "message": "BUG: PendingDeprecationWarning for getContents (#893)",
          "timestamp": "2022-05-23T13:37:07+02:00",
          "tree_id": "e8f2a13bff3d852bfc64a168bb13d52f0b3a9eed",
          "url": "https://github.com/py-pdf/PyPDF2/commit/9947c7b51f9e413458cc91eca2a1250829662fea"
        },
        "date": 1653305866099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6384252319257784,
            "unit": "iter/sec",
            "range": "stddev: 0.0018992346807512022",
            "extra": "mean: 1.5663541319999978 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.974341227663079,
            "unit": "iter/sec",
            "range": "stddev: 0.0016946913288356541",
            "extra": "mean: 111.42879177777824 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "c68b98d91fe6651215b81a1b1b20fc1a30b9d7e8",
          "message": "REL: 1.28.2\n\nBug Fixes (BUG):\n-  PendingDeprecationWarning for getContents (#893)\n-  PendingDeprecationWarning on using PdfMerger (#891)",
          "timestamp": "2022-05-23T13:43:15+02:00",
          "tree_id": "6df9d2cded070e2146f228642d5b63f6dfd33b71",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c68b98d91fe6651215b81a1b1b20fc1a30b9d7e8"
        },
        "date": 1653306253091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6522020864438595,
            "unit": "iter/sec",
            "range": "stddev: 0.004528216613580067",
            "extra": "mean: 1.5332670973999996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.312115022439992,
            "unit": "iter/sec",
            "range": "stddev: 0.0009052046268716951",
            "extra": "mean: 107.38698970000229 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "97c55d4612adce6ee70a5df008c13db4840be6d9",
          "message": "Fix merge issues",
          "timestamp": "2022-05-24T08:08:25+02:00",
          "tree_id": "fc4c0b89f3f49844d3d1d8f5ad9150e82d296d90",
          "url": "https://github.com/py-pdf/PyPDF2/commit/97c55d4612adce6ee70a5df008c13db4840be6d9"
        },
        "date": 1653372549207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.771204347955331,
            "unit": "iter/sec",
            "range": "stddev: 0.010726238644160878",
            "extra": "mean: 1.2966731874000288 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 11.032410021243166,
            "unit": "iter/sec",
            "range": "stddev: 0.005255479359061474",
            "extra": "mean: 90.64202636363916 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "1deb46a292cbcf466f9f36d8c004d7f4c18d9345",
          "message": "Fix mypy issues",
          "timestamp": "2022-05-24T08:17:33+02:00",
          "tree_id": "49b82dce5682459f8b9039275f791f7c07036b22",
          "url": "https://github.com/py-pdf/PyPDF2/commit/1deb46a292cbcf466f9f36d8c004d7f4c18d9345"
        },
        "date": 1653373097547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6917682133438199,
            "unit": "iter/sec",
            "range": "stddev: 0.058338258771737456",
            "extra": "mean: 1.4455709017999994 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.593165267287814,
            "unit": "iter/sec",
            "range": "stddev: 0.007062289635730386",
            "extra": "mean: 104.24088110000014 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43276ab5002e37cd2c654cdbe67bbfa0b1fe2eb3",
          "message": "BUG: PendingDeprecationWarning on merge/transform PageObject (#898)",
          "timestamp": "2022-05-25T08:48:04+02:00",
          "tree_id": "648b3230b8d3069270401c9372d91118335baba1",
          "url": "https://github.com/py-pdf/PyPDF2/commit/43276ab5002e37cd2c654cdbe67bbfa0b1fe2eb3"
        },
        "date": 1653461327364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6145136363540324,
            "unit": "iter/sec",
            "range": "stddev: 0.020197637681566464",
            "extra": "mean: 1.6273031887999991 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.866059490606984,
            "unit": "iter/sec",
            "range": "stddev: 0.004971974635072921",
            "extra": "mean: 112.7896785555562 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2be61f6c9d398c9381c5a2cbc9c7d4424508001",
          "message": "BUG: Use get_outlines instead of getOutlines (#897)\n\nThis removes a PendingDeprecationWarning",
          "timestamp": "2022-05-25T17:26:37+02:00",
          "tree_id": "2deaf5433081c231fa2a09c3c651239fea659396",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f2be61f6c9d398c9381c5a2cbc9c7d4424508001"
        },
        "date": 1653492440764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6843738934384183,
            "unit": "iter/sec",
            "range": "stddev: 0.0109943253786307",
            "extra": "mean: 1.4611895771999996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.501997345022126,
            "unit": "iter/sec",
            "range": "stddev: 0.004374873728489817",
            "extra": "mean: 105.241031300001 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8513e78fa8b532226e74cfda67e842376853a5e",
          "message": "TST: Improve tests for convert_to_int (#899)\n\nThis includes testing that convertToInt raises a pending deprecation warning",
          "timestamp": "2022-05-25T22:26:02+02:00",
          "tree_id": "1e6ecaf8f61c23b545067180b23ec301a8b7d28e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e8513e78fa8b532226e74cfda67e842376853a5e"
        },
        "date": 1653510411244,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5098313065594567,
            "unit": "iter/sec",
            "range": "stddev: 0.0639444041788556",
            "extra": "mean: 1.9614330998000014 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.552076659136676,
            "unit": "iter/sec",
            "range": "stddev: 0.00879345656556602",
            "extra": "mean: 132.41391012499548 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "787c784c5ec1c68737717321204943071722e8dc",
          "message": "DEP: PEP8 renaming (#900)\n\nPyPDF2 interface changes:\r\n\r\n* getXmpMetadata / xmpMetadata ➔ xmp_metadata\r\n* get_outlines ➔ _get_outlines (use outlines property instead)\r\n* getXmpMetadata ➔ xmp_metadata\r\n* getDestArray ➔ dest_array\r\n* additionalActions ➔ additional_actions\r\n* defaultValue ➔ default_value\r\n* mappingName ➔ mapping_name\r\n* altName ➔ alternate_name\r\n* fieldType ➔ field_type\r\n* ensureIsNumber ➔ _ensure_is_number\r\n* decodedSelf : decoded_self\r\n* addChild / removeChild  ➔ add_child / remove_child\r\n* flateEncode  ➔ flate_encode\r\n* getData / setData  ➔ get_data / set_data\r\n\r\nDOC: Use the new PyPDF2 interface\r\nSTY: Use reader/writer as variable names for PdfReader / PdfWriter\r\nMAINT: Let pytest capture many warnings\r\n\r\nFixes:\r\n\r\n* add_named_destionation was a typo and thus removed\r\n* Add missing `PendingDeprecationWarning` in warnings\r\n* Add missing `stacklevel=2` in warnings\r\n* merge_rotated_scaled_translated_page ➔ mergeRotatedScaledTranslatedPage: That renaming was not part of the 1.28.0 release and the complete function should be deprecated; no point in adding a renamed one first\r\n* add_transformation: Add missing parameter type annotation",
          "timestamp": "2022-05-26T11:02:38+02:00",
          "tree_id": "526f0bc4bebf7c4822ba763edb94050bbb376469",
          "url": "https://github.com/py-pdf/PyPDF2/commit/787c784c5ec1c68737717321204943071722e8dc"
        },
        "date": 1653555806616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5828429273514482,
            "unit": "iter/sec",
            "range": "stddev: 0.04039565289623298",
            "extra": "mean: 1.7157281200000056 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.379888478823906,
            "unit": "iter/sec",
            "range": "stddev: 0.00774379559540266",
            "extra": "mean: 119.33333033333484 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68515c94dab84472ab634e297a8da73d28a0ca6e",
          "message": "TST: Remove -OO testrun from CI (#901)\n\nWe needed it because we were manipulating a docstring programmatically.\r\n\r\nAs long as we don't rely on assert / docstrings being present, we don't need to test with -OO.",
          "timestamp": "2022-05-26T14:12:55+02:00",
          "tree_id": "5d7f931822a7ac707c3a6b15a734b87a2f79a1ba",
          "url": "https://github.com/py-pdf/PyPDF2/commit/68515c94dab84472ab634e297a8da73d28a0ca6e"
        },
        "date": 1653567218638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6833658274627129,
            "unit": "iter/sec",
            "range": "stddev: 0.008813469618698819",
            "extra": "mean: 1.463345048599996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.791071555138185,
            "unit": "iter/sec",
            "range": "stddev: 0.0051502754177186385",
            "extra": "mean: 102.13386700000342 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed952f91889fb6acc238ab0368fe93f2d533c1c6",
          "message": "TST: Use new PyPDF2 API in benchmark (#902)",
          "timestamp": "2022-05-26T17:11:15+02:00",
          "tree_id": "13936811568a88831180966ca0e33cb890d02bda",
          "url": "https://github.com/py-pdf/PyPDF2/commit/ed952f91889fb6acc238ab0368fe93f2d533c1c6"
        },
        "date": 1653577926882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.510090187706591,
            "unit": "iter/sec",
            "range": "stddev: 0.0189891174726544",
            "extra": "mean: 1.9604376326000021 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.7421016818198245,
            "unit": "iter/sec",
            "range": "stddev: 0.004520191677219272",
            "extra": "mean: 129.1638938749955 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "35e014d6b29afa3b2d7542b573a08e2590ab6a09",
          "message": "TST: Checkout submodule sample-files for benchmark",
          "timestamp": "2022-05-26T17:41:30+02:00",
          "tree_id": "7462c8a1f186c0c7383871d2fcbe16d460009916",
          "url": "https://github.com/py-pdf/PyPDF2/commit/35e014d6b29afa3b2d7542b573a08e2590ab6a09"
        },
        "date": 1653579756179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6390759580068262,
            "unit": "iter/sec",
            "range": "stddev: 0.010086733213925581",
            "extra": "mean: 1.5647592237999959 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.625701599702232,
            "unit": "iter/sec",
            "range": "stddev: 0.005047605209700734",
            "extra": "mean: 103.88853110000156 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.25905673112664573,
            "unit": "iter/sec",
            "range": "stddev: 0.014109017577951586",
            "extra": "mean: 3.860158335400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4c2830f28ef04dfb3783ce02e29bdc61f0e3c14",
          "message": "DOC: Add missing deprecation warning for addChild (#906)",
          "timestamp": "2022-05-26T22:41:23+02:00",
          "tree_id": "1e3cf2170c37cf24678d39682bf06ccf7ce4c0f2",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c4c2830f28ef04dfb3783ce02e29bdc61f0e3c14"
        },
        "date": 1653597749040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6310287582032477,
            "unit": "iter/sec",
            "range": "stddev: 0.013924301839389416",
            "extra": "mean: 1.5847138295999983 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.612403088256832,
            "unit": "iter/sec",
            "range": "stddev: 0.006733940730991103",
            "extra": "mean: 104.03225819999875 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2596070072934622,
            "unit": "iter/sec",
            "range": "stddev: 0.010628353561790906",
            "extra": "mean: 3.851976148200001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b387b06718c5347ea641b06acd44ee636b7ca864",
          "message": "DOC: Transformation (#907)",
          "timestamp": "2022-05-26T22:45:24+02:00",
          "tree_id": "646ce26c96a1e1411d15e44e3f291ce38190ffb7",
          "url": "https://github.com/py-pdf/PyPDF2/commit/b387b06718c5347ea641b06acd44ee636b7ca864"
        },
        "date": 1653597991977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6372041428285101,
            "unit": "iter/sec",
            "range": "stddev: 0.009543635355993176",
            "extra": "mean: 1.569355772800003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.802414860582097,
            "unit": "iter/sec",
            "range": "stddev: 0.005097601494057465",
            "extra": "mean: 102.01567819999582 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2619065971790734,
            "unit": "iter/sec",
            "range": "stddev: 0.020114326419335065",
            "extra": "mean: 3.8181550628000025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4d54ed59486abfcd429a281c4d12cc09780636b",
          "message": "BUG: Fix error adding transformation to page without /Contents (#908)",
          "timestamp": "2022-05-27T07:58:27+02:00",
          "tree_id": "0f8292364f95a29f7250bed2e892a8899b71735e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/b4d54ed59486abfcd429a281c4d12cc09780636b"
        },
        "date": 1653631174546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6328943629802469,
            "unit": "iter/sec",
            "range": "stddev: 0.011030135335598736",
            "extra": "mean: 1.580042513399998 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.751811863239821,
            "unit": "iter/sec",
            "range": "stddev: 0.004706856007834518",
            "extra": "mean: 102.54504640000022 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2625315831703426,
            "unit": "iter/sec",
            "range": "stddev: 0.005789307845957156",
            "extra": "mean: 3.8090655147999994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "892299cd2404678b796ffa1b8bc4cf17e8f9abeb",
          "message": "BUG: Add getPage back (#909)\n\nThis is one of the core methods that a lot of people use. It should not\r\nbe removed already.\r\n\r\nIt was removed by accident.",
          "timestamp": "2022-05-27T09:02:18+02:00",
          "tree_id": "3fb9279570c19745518623d94bf9580e602295df",
          "url": "https://github.com/py-pdf/PyPDF2/commit/892299cd2404678b796ffa1b8bc4cf17e8f9abeb"
        },
        "date": 1653635008988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.637461245172277,
            "unit": "iter/sec",
            "range": "stddev: 0.004848008414319655",
            "extra": "mean: 1.568722816600004 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.499077246812703,
            "unit": "iter/sec",
            "range": "stddev: 0.004065436979686178",
            "extra": "mean: 105.27338329999765 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2575180535819096,
            "unit": "iter/sec",
            "range": "stddev: 0.009681330626451035",
            "extra": "mean: 3.883222889000001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24993292fcf65353e4494580b4ca76055ff0589d",
          "message": "BUG: Add PdfObject.getObject back (#911)",
          "timestamp": "2022-05-27T13:15:16+02:00",
          "tree_id": "18f5d4883dd3fa19df6b98ab84153c230ca680b8",
          "url": "https://github.com/py-pdf/PyPDF2/commit/24993292fcf65353e4494580b4ca76055ff0589d"
        },
        "date": 1653650183782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6387413219007096,
            "unit": "iter/sec",
            "range": "stddev: 0.0072649780466469815",
            "extra": "mean: 1.5655790000000138 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.534368346414464,
            "unit": "iter/sec",
            "range": "stddev: 0.0037511945870815112",
            "extra": "mean: 104.88371789999746 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.25657372492503333,
            "unit": "iter/sec",
            "range": "stddev: 0.004484241365494187",
            "extra": "mean: 3.8975152279999974 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f060edb1bd87d0c3eb33198f9c9ea4f9bb18c36f",
          "message": "BUG: XmpInformation missing method _getText (#915)\n\nSee #914",
          "timestamp": "2022-05-28T10:26:38+02:00",
          "tree_id": "1fecfbb6ec799af7732befab89bcdf10816a86cc",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f060edb1bd87d0c3eb33198f9c9ea4f9bb18c36f"
        },
        "date": 1653726481973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5532821623066452,
            "unit": "iter/sec",
            "range": "stddev: 0.02228751468635365",
            "extra": "mean: 1.8073960596000034 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.315293711691115,
            "unit": "iter/sec",
            "range": "stddev: 0.005200334789145117",
            "extra": "mean: 120.26033411111176 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2243269440821604,
            "unit": "iter/sec",
            "range": "stddev: 0.045037400684582674",
            "extra": "mean: 4.457779265400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "7f779bda3393708abfde92337ed1b5ab2b64556f",
          "message": "DOC: CHANGELOG of 1.28.x",
          "timestamp": "2022-05-28T10:47:14+02:00",
          "tree_id": "36414684d6466a9cc056985b3e0c85c4182d72d5",
          "url": "https://github.com/py-pdf/PyPDF2/commit/7f779bda3393708abfde92337ed1b5ab2b64556f"
        },
        "date": 1653727710527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6426272457508126,
            "unit": "iter/sec",
            "range": "stddev: 0.03653620241095908",
            "extra": "mean: 1.5561120488000029 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.153684291621575,
            "unit": "iter/sec",
            "range": "stddev: 0.005313761070886646",
            "extra": "mean: 98.4864184545467 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26292404620164206,
            "unit": "iter/sec",
            "range": "stddev: 0.044245215478784676",
            "extra": "mean: 3.803379776200001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb68a4b16430fe9a7b0d536f42c7598d267f0922",
          "message": "DEV: Refine Any in xmp module (#918)\n\nSee #914",
          "timestamp": "2022-05-28T11:13:37+02:00",
          "tree_id": "5642a3006db2254b4486c8bc7b041410d3ee38d6",
          "url": "https://github.com/py-pdf/PyPDF2/commit/bb68a4b16430fe9a7b0d536f42c7598d267f0922"
        },
        "date": 1653729285857,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6385451215492326,
            "unit": "iter/sec",
            "range": "stddev: 0.008867337831956685",
            "extra": "mean: 1.5660600422000073 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.780389290380487,
            "unit": "iter/sec",
            "range": "stddev: 0.005454079796788924",
            "extra": "mean: 102.24541889999728 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2619138047707187,
            "unit": "iter/sec",
            "range": "stddev: 0.015759507510597664",
            "extra": "mean: 3.818049991199996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07bb859e91ce61d053a7abd3eac71665d92e10b7",
          "message": "DEP: rotate_clockwise ➔ rotate for PageObject (#913)\n\nSigned-off-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-05-28T12:10:43+02:00",
          "tree_id": "7e32ed194f855d3647885b18c96ca7fab3b081e0",
          "url": "https://github.com/py-pdf/PyPDF2/commit/07bb859e91ce61d053a7abd3eac71665d92e10b7"
        },
        "date": 1653732706239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6339722412682771,
            "unit": "iter/sec",
            "range": "stddev: 0.01039634774391367",
            "extra": "mean: 1.5773561283999995 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.644043969217911,
            "unit": "iter/sec",
            "range": "stddev: 0.0066782293305035646",
            "extra": "mean: 103.69094159999932 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2616231286706273,
            "unit": "iter/sec",
            "range": "stddev: 0.012933309796893715",
            "extra": "mean: 3.8222920315999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbfd46ccc9d22b1444e2293943dab5baabab4af6",
          "message": "DEV: Create flake8 config file (#916)\n\nSigned-off-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-05-28T21:13:08+02:00",
          "tree_id": "aa186de9291efb7afd30e8ff30051a7b6bda8cf6",
          "url": "https://github.com/py-pdf/PyPDF2/commit/bbfd46ccc9d22b1444e2293943dab5baabab4af6"
        },
        "date": 1653765256179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6280606999463212,
            "unit": "iter/sec",
            "range": "stddev: 0.015485614735069498",
            "extra": "mean: 1.592202791999989 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.72505636703493,
            "unit": "iter/sec",
            "range": "stddev: 0.005130952401877954",
            "extra": "mean: 102.82716749999565 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26085810797089304,
            "unit": "iter/sec",
            "range": "stddev: 0.00583720631038026",
            "extra": "mean: 3.833501698599997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7647ab5f35f386050943fbe1be74351d8e5aac91",
          "message": "DOC: Adjust deprecation messages (#919)\n\nWe are trying to break as few running systems as possible. For this\r\nreason we keep the adapter methods / classes in PyPDF2 until 3.0.0.\r\n\r\nThis commit is done to not confuse people. It will not be backported\r\nto the 1.x branch though.\r\n\r\nCo-authored-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-05-29T10:40:49+02:00",
          "tree_id": "b19dbb6317897b4b6fd65686586b65f0b68d19e8",
          "url": "https://github.com/py-pdf/PyPDF2/commit/7647ab5f35f386050943fbe1be74351d8e5aac91"
        },
        "date": 1653813734986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5436673309935659,
            "unit": "iter/sec",
            "range": "stddev: 0.03892472591495414",
            "extra": "mean: 1.8393601068000067 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.155094005486639,
            "unit": "iter/sec",
            "range": "stddev: 0.009736845348701825",
            "extra": "mean: 122.62274344443034 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.21894056292532493,
            "unit": "iter/sec",
            "range": "stddev: 0.07996699178911772",
            "extra": "mean: 4.567449661399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c59224a423f81adfd16cc471322803dcaabe93e0",
          "message": "ENH: Allow setting the decryption password in PdfReader.__init__ (#920)\n\nThis is a convenience change. You can still call `reader = PdfReader(\"encrypted.pdf\"); reader.decrypt(password)`.\r\n\r\nFull credit to pubpub-zz; I just made stylistic changes.\r\n\r\nCloses #910 \r\n\r\nCo-authored-by: pubpub-zz <4083478+pubpub-zz@users.noreply.github.com>",
          "timestamp": "2022-05-29T10:57:37+02:00",
          "tree_id": "b9df8cfaa87cae9db324394306ded3cd8ab6d404",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c59224a423f81adfd16cc471322803dcaabe93e0"
        },
        "date": 1653814738168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5426886180795918,
            "unit": "iter/sec",
            "range": "stddev: 0.01200177887464513",
            "extra": "mean: 1.842677304599998 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.408381666556158,
            "unit": "iter/sec",
            "range": "stddev: 0.005342018483201632",
            "extra": "mean: 118.92894966666903 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22392693607740943,
            "unit": "iter/sec",
            "range": "stddev: 0.007376436019779131",
            "extra": "mean: 4.4657423421999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c008b0f448219d4727a8ba07570aba0abf4321e2",
          "message": "ENH: Improve space setting for text extraction (#922)\n\nFull credit to pubpub-zz who introduced this change in\r\nhttps://github.com/py-pdf/PyPDF2/pull/881\r\n\r\nCo-authored-by: pubpub-zz <4083478+pubpub-zz@users.noreply.github.com>",
          "timestamp": "2022-05-29T14:14:07+02:00",
          "tree_id": "6d3f36d7972ccad55ee119863d23366a9f1c55d3",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c008b0f448219d4727a8ba07570aba0abf4321e2"
        },
        "date": 1653826517554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6377037001130151,
            "unit": "iter/sec",
            "range": "stddev: 0.01050493276016348",
            "extra": "mean: 1.5681263882000025 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.709615217367169,
            "unit": "iter/sec",
            "range": "stddev: 0.005795550970974708",
            "extra": "mean: 102.99069300000099 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22762323826531633,
            "unit": "iter/sec",
            "range": "stddev: 0.014775597994005173",
            "extra": "mean: 4.393224556599998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42d465968b8333c126ab6967b882c945103672db",
          "message": "TST: Regression test for xmp_metadata converter (#923)",
          "timestamp": "2022-05-29T15:44:39+02:00",
          "tree_id": "9ea6d5bbf4406b9f30e8a1318236e22e03a3af0d",
          "url": "https://github.com/py-pdf/PyPDF2/commit/42d465968b8333c126ab6967b882c945103672db"
        },
        "date": 1653831961663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5389565502691088,
            "unit": "iter/sec",
            "range": "stddev: 0.009812206401642437",
            "extra": "mean: 1.8554371396000022 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.157595218807504,
            "unit": "iter/sec",
            "range": "stddev: 0.006128000578427391",
            "extra": "mean: 122.5851458888864 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19231766736649508,
            "unit": "iter/sec",
            "range": "stddev: 0.006270496958427273",
            "extra": "mean: 5.199730288399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "552767ebff5c4b93e1756ab111da6f2418a19cb7",
          "message": "DOC: CHANGELOG of 1.28.4 (#926)",
          "timestamp": "2022-05-30T15:19:20Z",
          "tree_id": "653ab65f3e658259f53b1a497f8238743b7878c6",
          "url": "https://github.com/py-pdf/PyPDF2/commit/552767ebff5c4b93e1756ab111da6f2418a19cb7"
        },
        "date": 1653924030761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6339928082229468,
            "unit": "iter/sec",
            "range": "stddev: 0.006491794857137019",
            "extra": "mean: 1.5773049584000092 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.744753270628017,
            "unit": "iter/sec",
            "range": "stddev: 0.005343201676564059",
            "extra": "mean: 102.61932470000374 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22816372880708463,
            "unit": "iter/sec",
            "range": "stddev: 0.016290571847674545",
            "extra": "mean: 4.382817572400006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d14a86f975b5b9e06badba5908e26e7a9d33932",
          "message": "DOC: Fix style of 1.25 and 1.27 patch notes (#927)",
          "timestamp": "2022-05-30T20:08:40+02:00",
          "tree_id": "734b059e8b07cb5afcc9502253dcd6287a6d0908",
          "url": "https://github.com/py-pdf/PyPDF2/commit/1d14a86f975b5b9e06badba5908e26e7a9d33932"
        },
        "date": 1653934211418,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.4727539530556145,
            "unit": "iter/sec",
            "range": "stddev: 0.03327161361334232",
            "extra": "mean: 2.1152652316 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.172594257553638,
            "unit": "iter/sec",
            "range": "stddev: 0.005543246503278477",
            "extra": "mean: 139.41956899999954 msec\nrounds: 7"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.1682061105658021,
            "unit": "iter/sec",
            "range": "stddev: 0.06999002272493746",
            "extra": "mean: 5.945087230399997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57301980b8c44273a53d42ea4041ff7d73697f6f",
          "message": "MAINT: Add wrapper function for PendingDeprecationWarnings (#928)\n\nSigned-off-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-06-01T07:37:32+02:00",
          "tree_id": "dd2a6428546c94917ab8a65362431d08c3e62add",
          "url": "https://github.com/py-pdf/PyPDF2/commit/57301980b8c44273a53d42ea4041ff7d73697f6f"
        },
        "date": 1654061923923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6421287187167684,
            "unit": "iter/sec",
            "range": "stddev: 0.0034513948440242823",
            "extra": "mean: 1.557320161600002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.854278467705628,
            "unit": "iter/sec",
            "range": "stddev: 0.004465246440355832",
            "extra": "mean: 101.4787640999991 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22798891273046218,
            "unit": "iter/sec",
            "range": "stddev: 0.017851623559301047",
            "extra": "mean: 4.386178204999998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "f261badb87fdbff08cfd2d19711a0ea6cc024489",
          "message": "REL: 2.0.0\n\nThe 2.0.0 release of PyPDF2 includes three core changes:\n\n1. Dropping support for Python 3.5 and older.\n2. Introducing type annotations.\n3. Interface changes, mostly to have PEP8-compliant names\n\nWe introduced a [deprecation process](https://github.com/py-pdf/PyPDF2/pull/930)\nthat hopefully helps users to avoid unexpected breaking changes.\n\nBreaking Changes(DEP):\n- PyPDF2 2.0 requires Python 3.6+. Python 2.7 and 3.5 support were dropped.\n- PdfFileReader: The \"warndest\" parameter was removed\n- PdfFileReader and PdfFileMerger no longer have the `overwriteWarnings`\n  parameter. The new behavior is `overwriteWarnings=False`.\n- merger: OutlinesObject was removed without replacement.\n- merger.py ➔ _merger.py: You must import PdfFileMerger from PyPDF2 directly.\n- utils:\n  * `ConvertFunctionsToVirtualList` was removed\n  * `formatWarning` was removed\n  * `isInt(obj)`: Use `instance(obj, int)` instead\n  * `u_(s)`: Use `s` directly\n  * `chr_(c)`: Use `chr(c)` instead\n  * `barray(b)`: Use `bytearray(b)` instead\n  * `isBytes(b)`: Use `instance(b, type(bytes()))` instead\n  * `xrange_fn`: Use `range` instead\n  * `string_type`: Use `str` instead\n  * `isString(s)`: Use `instance(s, str)` instead\n  * `_basestring`: Use `str` instead\n  * All Exceptions are now in `PyPDF2.errors`:\n    - PageSizeNotDefinedError\n    - PdfReadError\n    - PdfReadWarning\n    - PyPdfError\n- `PyPDF2.pdf` (the `pdf` module) no longer exists. The contents were moved with\n  the library. You should most likely import directly from `PyPDF2` instead.\n  The `RectangleObject` is in `PyPDF2.generic`.\n- The `Resources`, `Scripts`, and `Tests` will no longer be part of the distribution\n  files on PyPI. This should have little to no impact on most people. The\n  `Tests` are renamed to `tests`, the `Resources` are renamed to `resources`.\n  Both are still in the git repository. The `Scripts` are now in\n  https://github.com/py-pdf/cpdf. `Sample_Code` was moved to the `docs`.\n\nFor a full list of deprecated functions, please see the changelog of version\n1.28.0.\n\nNew Features (ENH):\n-  Improve space setting for text extraction (#922)\n-  Allow setting the decryption password in PdfReader.__init__ (#920)\n-  Add Page.add_transformation (#883)\n\nBug Fixes (BUG):\n-  Fix error adding transformation to page without /Contents (#908)\n\nRobustness (ROB):\n-  Cope with invalid length in streams (#861)\n\nDocumentation (DOC):\n-  Fix style of 1.25 and 1.27 patch notes (#927)\n-  Transformation (#907)\n\nDeveloper Experience (DEV):\n-  Create flake8 config file (#916)\n-  Use relative imports (#875)\n\nMaintenance (MAINT):\n-  Use Python 3.6 language features (#849)\n-  Add wrapper function for PendingDeprecationWarnings (#928)\n-  Use new PEP8 compliant names (#884)\n-  Explicitly represent transformation matrix (#878)\n-  Inline PAGE_RANGE_HELP string (#874)\n-  Remove unnecessary generics imports (#873)\n-  Remove star imports (#865)\n-  merger.py ➔ _merger.py (#864)\n-  Type annotations for all functions/methods (#854)\n-  Add initial type support with mypy (#853)\n\nTesting (TST):\n-  Regression test for xmp_metadata converter (#923)\n-  Checkout submodule sample-files for benchmark\n-  Add text extracting performance benchmark\n-  Use new PyPDF2 API in benchmark (#902)\n-  Make test suite fail for uncaught warnings (#892)\n-  Remove -OO testrun from CI (#901)\n-  Improve tests for convert_to_int (#899)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.28.4...2.0.0",
          "timestamp": "2022-06-01T07:56:34+02:00",
          "tree_id": "e09b75f4108e70b0933199d91399b9ca51479cd1",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f261badb87fdbff08cfd2d19711a0ea6cc024489"
        },
        "date": 1654063094576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6293911413071543,
            "unit": "iter/sec",
            "range": "stddev: 0.007449796172802097",
            "extra": "mean: 1.5888371067999856 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.697491419656135,
            "unit": "iter/sec",
            "range": "stddev: 0.004499510098939933",
            "extra": "mean: 103.11945190001097 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22351325680711265,
            "unit": "iter/sec",
            "range": "stddev: 0.009675818763086945",
            "extra": "mean: 4.474007556799995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5730033d99cef3a2a3862f7893c678a21f04ddb6",
          "message": "DOC: Remove scripts (pdfcat) from docs (#934)",
          "timestamp": "2022-06-01T13:53:28+02:00",
          "tree_id": "ab224f10301c410881cccabe8393f18781f9aecf",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5730033d99cef3a2a3862f7893c678a21f04ddb6"
        },
        "date": 1654084487521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.550771847845214,
            "unit": "iter/sec",
            "range": "stddev: 0.035537354609884365",
            "extra": "mean: 1.8156338307999988 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.619390034440919,
            "unit": "iter/sec",
            "range": "stddev: 0.00850408893750302",
            "extra": "mean: 116.01749033333577 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19731059596320644,
            "unit": "iter/sec",
            "range": "stddev: 0.16220470685048596",
            "extra": "mean: 5.068151535999999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cd9968c346e49d2fbea62cec1df99083f79fc7a",
          "message": "DOC: Fix typos on robustness page (#935)",
          "timestamp": "2022-06-01T16:01:43+02:00",
          "tree_id": "7f4edcc936a8f2790a520a2cc6ccc32b6a01a880",
          "url": "https://github.com/py-pdf/PyPDF2/commit/2cd9968c346e49d2fbea62cec1df99083f79fc7a"
        },
        "date": 1654092175626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6263377512724683,
            "unit": "iter/sec",
            "range": "stddev: 0.006329041894278622",
            "extra": "mean: 1.5965826712000024 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.354537492966712,
            "unit": "iter/sec",
            "range": "stddev: 0.004435092013223816",
            "extra": "mean: 106.89999379999904 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2193640902761155,
            "unit": "iter/sec",
            "range": "stddev: 0.04937498190546385",
            "extra": "mean: 4.5586312634 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba6614dab89517718f13069a7daf2128533a6f62",
          "message": "DOC: How to deprecate (#930)\n\nCo-authored-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-06-01T21:47:33+02:00",
          "tree_id": "2d49580da5b03761df247ae661091abaf82784f3",
          "url": "https://github.com/py-pdf/PyPDF2/commit/ba6614dab89517718f13069a7daf2128533a6f62"
        },
        "date": 1654112943259,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5095408487575949,
            "unit": "iter/sec",
            "range": "stddev: 0.05136854419861957",
            "extra": "mean: 1.9625511917999972 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.390364203275787,
            "unit": "iter/sec",
            "range": "stddev: 0.007952162170515756",
            "extra": "mean: 119.18433762500769 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.1922970125901679,
            "unit": "iter/sec",
            "range": "stddev: 0.10087548857060111",
            "extra": "mean: 5.200288795599988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86697bb74248eeb7c58d87210911fd6d3c754dad",
          "message": "DOC: Example how to use PyPDF2 with AWS S3 (#938)",
          "timestamp": "2022-06-04T09:25:16+02:00",
          "tree_id": "ded411dd8811165832641a2b1ebfc1e576e64bac",
          "url": "https://github.com/py-pdf/PyPDF2/commit/86697bb74248eeb7c58d87210911fd6d3c754dad"
        },
        "date": 1654327598769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.525201298111016,
            "unit": "iter/sec",
            "range": "stddev: 0.007935124771440894",
            "extra": "mean: 1.9040318513999979 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.963488559659653,
            "unit": "iter/sec",
            "range": "stddev: 0.005670726290716172",
            "extra": "mean: 125.57310687500234 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.18596358303114996,
            "unit": "iter/sec",
            "range": "stddev: 0.012239170040795846",
            "extra": "mean: 5.377396927399997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66ecb2aa56cc7dc8b9750bb7c8efa25fc94d977b",
          "message": "DOC: rotate vs Transformation().rotate (#937)",
          "timestamp": "2022-06-04T09:25:33+02:00",
          "tree_id": "2818f390178a904b832136dde89de371805cb6ce",
          "url": "https://github.com/py-pdf/PyPDF2/commit/66ecb2aa56cc7dc8b9750bb7c8efa25fc94d977b"
        },
        "date": 1654327615737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5350349841645092,
            "unit": "iter/sec",
            "range": "stddev: 0.11547220481963218",
            "extra": "mean: 1.8690366603999977 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.1430180112801,
            "unit": "iter/sec",
            "range": "stddev: 0.008005330017546403",
            "extra": "mean: 122.8045914444438 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.1815989036975589,
            "unit": "iter/sec",
            "range": "stddev: 0.09197359073393402",
            "extra": "mean: 5.506641172599998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "e853ec1b65ee6b5c761289292b3b2835ec2f4320",
          "message": "STY: Apply black/isort",
          "timestamp": "2022-06-04T09:56:16+02:00",
          "tree_id": "df25fe3173a2a4c9f71434924b7cc3ad8e442441",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e853ec1b65ee6b5c761289292b3b2835ec2f4320"
        },
        "date": 1654329454908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.8837199482265174,
            "unit": "iter/sec",
            "range": "stddev: 0.049089868493836494",
            "extra": "mean: 1.131580204799991 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 14.292333514552215,
            "unit": "iter/sec",
            "range": "stddev: 0.002525919510115837",
            "extra": "mean: 69.96758080000139 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.3147480678322563,
            "unit": "iter/sec",
            "range": "stddev: 0.013254966845663319",
            "extra": "mean: 3.177144205800005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christopher.j.donlan@gmail.com",
            "name": "Christopher Donlan",
            "username": "chrisdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336eae77462f15ed1d6c1490eaed66f53109026b",
          "message": "BUG: Compare StreamObject.decoded_self with None (#931)\n\nThe 'if self.decoded_self' expression evaluates to 'False', e.g. if decoded_self is an empty dictionary.",
          "timestamp": "2022-06-04T11:11:17+02:00",
          "tree_id": "ae23c5b7486b8493fd8cd4d0dd235a86dc2422fc",
          "url": "https://github.com/py-pdf/PyPDF2/commit/336eae77462f15ed1d6c1490eaed66f53109026b"
        },
        "date": 1654333948261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6284224757609584,
            "unit": "iter/sec",
            "range": "stddev: 0.009406395668927502",
            "extra": "mean: 1.5912861785999894 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.721812692212684,
            "unit": "iter/sec",
            "range": "stddev: 0.0055667794414109555",
            "extra": "mean: 102.86147570000139 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22225392686342357,
            "unit": "iter/sec",
            "range": "stddev: 0.014263327690127765",
            "extra": "mean: 4.499358072600023 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2e0byo@gmail.com",
            "name": "2e0byo",
            "username": "2e0byo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59db8aa111d65b8bc857c4975830755efc6e76b7",
          "message": "DEV: Automatically create Github releases from tags (#870)\n\nAdditionally add comment how to release to PyPI from Github\r\n\r\nCloses #748",
          "timestamp": "2022-06-04T15:49:07+02:00",
          "tree_id": "b4ee60a66c0fd75762bce8adc1184d7e9390f6e9",
          "url": "https://github.com/py-pdf/PyPDF2/commit/59db8aa111d65b8bc857c4975830755efc6e76b7"
        },
        "date": 1654350636126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.4693266041059559,
            "unit": "iter/sec",
            "range": "stddev: 0.02987176990297823",
            "extra": "mean: 2.130712368 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.278746961890765,
            "unit": "iter/sec",
            "range": "stddev: 0.007027755611665368",
            "extra": "mean: 137.3862843750011 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.16442657516379156,
            "unit": "iter/sec",
            "range": "stddev: 0.06491701075134328",
            "extra": "mean: 6.081741950799997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98b4739e5a259940877dcd0b467d263d09c4b636",
          "message": "DOC: Add logo (#942)",
          "timestamp": "2022-06-04T18:06:30+02:00",
          "tree_id": "574613507e209a8c43820eabd80a67c900d466ec",
          "url": "https://github.com/py-pdf/PyPDF2/commit/98b4739e5a259940877dcd0b467d263d09c4b636"
        },
        "date": 1654358877680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.4928239953722949,
            "unit": "iter/sec",
            "range": "stddev: 0.022206150464091308",
            "extra": "mean: 2.0291219774000013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.869002829210174,
            "unit": "iter/sec",
            "range": "stddev: 0.0074498502089382565",
            "extra": "mean: 127.08090487500456 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.18304707042218185,
            "unit": "iter/sec",
            "range": "stddev: 0.04709477185713704",
            "extra": "mean: 5.463075687000009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5d68957dfdfdced04fb0fed1f1416266c65759e",
          "message": "DEV: Mark deprecated code with no-cover (#943)\n\nThis allows us to track the blind spots of our unit tests better",
          "timestamp": "2022-06-04T20:11:06+02:00",
          "tree_id": "d4d7277db09733654e0fd3082583c092241e072f",
          "url": "https://github.com/py-pdf/PyPDF2/commit/a5d68957dfdfdced04fb0fed1f1416266c65759e"
        },
        "date": 1654366335860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6472791889144676,
            "unit": "iter/sec",
            "range": "stddev: 0.010206067055147278",
            "extra": "mean: 1.5449283973999997 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.96590481255386,
            "unit": "iter/sec",
            "range": "stddev: 0.005089665132280091",
            "extra": "mean: 100.34211833333175 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22584435942835684,
            "unit": "iter/sec",
            "range": "stddev: 0.09187806665658418",
            "extra": "mean: 4.427828095999996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kim.brose@rwth-aachen.de",
            "name": "Kim Brose",
            "username": "HarHarLinks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0358e20f46ffcd4f2dd97c69d48b29797f1d33e7",
          "message": "BUG: Delete .python-version file (#944)",
          "timestamp": "2022-06-04T20:13:24+02:00",
          "tree_id": "7c921f6e1a304625208ef92a6fc3fd2a05fd4ff0",
          "url": "https://github.com/py-pdf/PyPDF2/commit/0358e20f46ffcd4f2dd97c69d48b29797f1d33e7"
        },
        "date": 1654366491424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5584075295029769,
            "unit": "iter/sec",
            "range": "stddev: 0.012905612467001691",
            "extra": "mean: 1.7908067982000033 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.631122267925237,
            "unit": "iter/sec",
            "range": "stddev: 0.00626699297855934",
            "extra": "mean: 115.85978844445005 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19700499690889398,
            "unit": "iter/sec",
            "range": "stddev: 0.03156404400092536",
            "extra": "mean: 5.076013378800008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "76e38ac36623368f00c4ba5a2a8dc563fe822e63",
          "message": "DEV: Ignore .python-version file",
          "timestamp": "2022-06-04T20:15:12+02:00",
          "tree_id": "3efdb906664ba2a8f70c248501e7f899d4c2a321",
          "url": "https://github.com/py-pdf/PyPDF2/commit/76e38ac36623368f00c4ba5a2a8dc563fe822e63"
        },
        "date": 1654366598159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5583888110141171,
            "unit": "iter/sec",
            "range": "stddev: 0.10402669096090264",
            "extra": "mean: 1.7908668302000024 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.700993987341445,
            "unit": "iter/sec",
            "range": "stddev: 0.006518565385691636",
            "extra": "mean: 114.92939788888951 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.21541168893678758,
            "unit": "iter/sec",
            "range": "stddev: 0.09943470674901421",
            "extra": "mean: 4.642273615399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34919f9e97b276628e5c6f06b8bf61ae9c7b5b52",
          "message": "TST: Add test for Tree and _security (#945)",
          "timestamp": "2022-06-04T22:36:28+02:00",
          "tree_id": "1250ddfd7b24a78778f13375a7d89c5bf8c3259f",
          "url": "https://github.com/py-pdf/PyPDF2/commit/34919f9e97b276628e5c6f06b8bf61ae9c7b5b52"
        },
        "date": 1654375060068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6353542239595663,
            "unit": "iter/sec",
            "range": "stddev: 0.007486306204245972",
            "extra": "mean: 1.5739251621999757 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.833261978595612,
            "unit": "iter/sec",
            "range": "stddev: 0.005285128530493252",
            "extra": "mean: 101.69565319999947 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2263526516994648,
            "unit": "iter/sec",
            "range": "stddev: 0.014375532594736997",
            "extra": "mean: 4.4178850678 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1df859c9a102399494c9a71639f5e24c76d23e5c",
          "message": "TST: writer.remove_text (#946)",
          "timestamp": "2022-06-05T11:48:05+02:00",
          "tree_id": "a7d4e0c5244741d10cf6116980c80b545e8bd151",
          "url": "https://github.com/py-pdf/PyPDF2/commit/1df859c9a102399494c9a71639f5e24c76d23e5c"
        },
        "date": 1654422556094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6419490450577945,
            "unit": "iter/sec",
            "range": "stddev: 0.005172369430100931",
            "extra": "mean: 1.5577560364000078 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.555296583023976,
            "unit": "iter/sec",
            "range": "stddev: 0.0036395111277391272",
            "extra": "mean: 104.65399909999746 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22341562860688183,
            "unit": "iter/sec",
            "range": "stddev: 0.009688495615550418",
            "extra": "mean: 4.4759626094 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0084120b77fe450629fdd5b4a1d25f991074c6a",
          "message": "TST: Ignore PdfReadWarning in benchmark (#949)\n\nIgnore the PdfReadWarning in the benchmarking code as it is only supposed to be used for performance testing.",
          "timestamp": "2022-06-06T09:36:23+02:00",
          "tree_id": "17ebc5973cbcc26c9aa75f4a30ea9fe214f80340",
          "url": "https://github.com/py-pdf/PyPDF2/commit/b0084120b77fe450629fdd5b4a1d25f991074c6a"
        },
        "date": 1654501057110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6289519903492351,
            "unit": "iter/sec",
            "range": "stddev: 0.007449504288683419",
            "extra": "mean: 1.5899464749999992 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.850370993045722,
            "unit": "iter/sec",
            "range": "stddev: 0.005813671722364579",
            "extra": "mean: 101.51901899999416 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.23285732582591734,
            "unit": "iter/sec",
            "range": "stddev: 0.00972297056825972",
            "extra": "mean: 4.294475153200006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4baedb2054648b9db70c2fbed82b6902aea52365",
          "message": "STY: black, isort, Flake8, splitting buildCharMap (#950)\n\nThis commit contains several small stylistic changes. Most of then were found by Flake8.\r\n\r\nThe biggest single change is moving buildCharMap to its own module. There it was split into several functions to make it easier to understand how it works. This could also make it easier to understand adjustments in future pull requests.\r\n\r\nA caching mechanism for downloaded files was added to speed up local testing",
          "timestamp": "2022-06-06T13:29:00+02:00",
          "tree_id": "8d9948d6b3047a6988a32500c7b3a0bee18e1198",
          "url": "https://github.com/py-pdf/PyPDF2/commit/4baedb2054648b9db70c2fbed82b6902aea52365"
        },
        "date": 1654515018997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5508708108708029,
            "unit": "iter/sec",
            "range": "stddev: 0.018735453331864042",
            "extra": "mean: 1.8153076552000003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.394986291439446,
            "unit": "iter/sec",
            "range": "stddev: 0.007699206183961742",
            "extra": "mean: 119.11871744444922 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.20079559405369718,
            "unit": "iter/sec",
            "range": "stddev: 0.038049997881075256",
            "extra": "mean: 4.980188956399999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a1db78ae5b86eb8fe8584889f8ec6787ecee689",
          "message": "ENH: Allow adding PageRange objects (#948)\n\nNow the following is possible:\r\n\r\n    >>> from PyPDF2 import PageRange\r\n    >>> a = PageRange(\"0:5\")\r\n    >>> b = PageRange(\"2:7\")\r\n    >>> a + b\r\n    PageRange(\"0:7\")\r\n\r\nCloses #759\r\nSee #751\r\nSee #752",
          "timestamp": "2022-06-06T13:35:12+02:00",
          "tree_id": "45d682c20c24379d1385d294f56ce01ab8667289",
          "url": "https://github.com/py-pdf/PyPDF2/commit/2a1db78ae5b86eb8fe8584889f8ec6787ecee689"
        },
        "date": 1654515381454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.623770095271508,
            "unit": "iter/sec",
            "range": "stddev: 0.03076975969767426",
            "extra": "mean: 1.6031547641999908 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.82141339033016,
            "unit": "iter/sec",
            "range": "stddev: 0.005797230659974639",
            "extra": "mean: 101.81833919999406 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.23281603278896892,
            "unit": "iter/sec",
            "range": "stddev: 0.04263352708101484",
            "extra": "mean: 4.2952368358 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "babe32e471c6c0d6ee8dd356432dded225fe69a9",
          "message": "TST: Text extraction for non-latin alphabets (#954)\n\nSee #591",
          "timestamp": "2022-06-06T14:51:33+02:00",
          "tree_id": "609d42cbf4f8f9143f4885c0a83ee8ed7625ab18",
          "url": "https://github.com/py-pdf/PyPDF2/commit/babe32e471c6c0d6ee8dd356432dded225fe69a9"
        },
        "date": 1654519972831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.49568854269348966,
            "unit": "iter/sec",
            "range": "stddev: 0.089218674142686",
            "extra": "mean: 2.0173958319999996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.256144088956997,
            "unit": "iter/sec",
            "range": "stddev: 0.007661703360511162",
            "extra": "mean: 121.12191711110636 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.20322879884227077,
            "unit": "iter/sec",
            "range": "stddev: 0.017251143786564296",
            "extra": "mean: 4.920562468000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "4e44122147de99d78b6fef0066b3dcfffc3faa69",
          "message": "REL: 2.1.0\n\nThe highlight of the 2.1.0 release is the most massive improvement to the\ntext extraction capabilities of PyPDF2 since 2016 🥳🎊 A very big thank you goes\nto [pubpub-zz](https://github.com/pubpub-zz) who took a lot of time and\nknowledge about the PDF format to finally get those improvements into PyPDF2.\nThank you 🤗💚\n\nIn case the new function causes any issues, you can use `_extract_text_old`\nfor the old functionality. Please also open a bug ticket in that case.\n\nThere were several people who have attempted to bring similar improvements to\nPyPDF2. All of those were valuable. The main reason why they didn't get merged\nis the big amount of open PRs / issues. pubpub-zz was the most comprehensive\nPR which also incorporated the latest changes of PyPDF2 2.0.0.\n\nThank you to [VictorCarlquist](https://github.com/VictorCarlquist) for #858 and\n[asabramo](https://github.com/asabramo) for #464 🤗\n\nNew Features (ENH):\n-  Massive text extraction improvement (#924). Closed many open issues:\n    - Exceptions / missing spaces in extract_text() method (#17) 🕺\n      - Whitespace issues in extract_text() (#42) 💃\n      - pypdf2 reads the hifenated words in a new line (#246)\n    - PyPDF2 failing to read unicode character (#37)\n      - Unable to read bullets (#230)\n    - ExtractText yields nothing for apparently good PDF (#168) 🎉\n    - Encoding issue in extract_text() (#235)\n    - extractText() doesn't work on Chinese PDF (#252)\n    - encoding error (#260)\n    - Trouble with apostophes in names in text \"O'Doul\" (#384)\n    - extract_text works for some PDF files, but not the others (#437)\n    - Euro sign not being recognized by extractText (#443)\n    - Failed extracting text from French texts (#524)\n    - extract_text doesn't extract ligatures correctly (#598)\n    - reading spanish text - mark convert issue (#635)\n    - Read PDF changed from text to random symbols (#654)\n    - .extractText() reads / as 1. (#789)\n-  Update glyphlist (#947) - inspired by #464\n-  Allow adding PageRange objects (#948)\n\nBug Fixes (BUG):\n-  Delete .python-version file (#944)\n-  Compare StreamObject.decoded_self with None (#931)\n\nRobustness (ROB):\n-  Fix some conversion errors on non conform PDF (#932)\n\nDocumentation (DOC):\n-  Elaborate on PDF text extraction difficulties (#939)\n-  Add logo (#942)\n-  rotate vs Transformation().rotate (#937)\n-  Example how to use PyPDF2 with AWS S3 (#938)\n-  How to deprecate (#930)\n-  Fix typos on robustness page (#935)\n-  Remove scripts (pdfcat) from docs (#934)\n\nDeveloper Experience (DEV):\n-  Ignore .python-version file\n-  Mark deprecated code with no-cover (#943)\n-  Automatically create Github releases from tags (#870)\n\nTesting (TST):\n-  Text extraction for non-latin alphabets (#954)\n-  Ignore PdfReadWarning in benchmark (#949)\n-  writer.remove_text (#946)\n-  Add test for Tree and _security (#945)\n\nCode Style (STY):\n-  black, isort, Flake8, splitting buildCharMap (#950)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/2.0.0...2.1.0",
          "timestamp": "2022-06-06T16:02:41+02:00",
          "tree_id": "6ace3082e4abbce97eda06763be8090be2d65b85",
          "url": "https://github.com/py-pdf/PyPDF2/commit/4e44122147de99d78b6fef0066b3dcfffc3faa69"
        },
        "date": 1654524262165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6181497606295285,
            "unit": "iter/sec",
            "range": "stddev: 0.007768613450684952",
            "extra": "mean: 1.6177309508000008 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.69034555059045,
            "unit": "iter/sec",
            "range": "stddev: 0.006457488101796432",
            "extra": "mean: 103.19549439999776 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.23001084468103136,
            "unit": "iter/sec",
            "range": "stddev: 0.0310197694492913",
            "extra": "mean: 4.3476210931999955 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "67752638+Kreusada@users.noreply.github.com",
            "name": "Kreusada",
            "username": "Kreusada"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9118f030b08a6509163cefc39859f582690bbf92",
          "message": "DOC: intendet ➔ in robustness page  (#958)",
          "timestamp": "2022-06-07T17:10:11+02:00",
          "tree_id": "83373274a3ac68acccfd09c0c7afc221d20f934f",
          "url": "https://github.com/py-pdf/PyPDF2/commit/9118f030b08a6509163cefc39859f582690bbf92"
        },
        "date": 1654614689505,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6193629665163818,
            "unit": "iter/sec",
            "range": "stddev: 0.007193108691724643",
            "extra": "mean: 1.6145621454000036 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.604414019645382,
            "unit": "iter/sec",
            "range": "stddev: 0.0065182676808168616",
            "extra": "mean: 104.1187935000039 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22729789216625307,
            "unit": "iter/sec",
            "range": "stddev: 0.01383069473636423",
            "extra": "mean: 4.399512861599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23a804228852c25433d888c9ac2caf84da8f7194",
          "message": "TST: utils.paeth_predictor (#959)",
          "timestamp": "2022-06-07T21:49:50+02:00",
          "tree_id": "e0e82f34dbbe32ad85f3ce1545ade699743e1440",
          "url": "https://github.com/py-pdf/PyPDF2/commit/23a804228852c25433d888c9ac2caf84da8f7194"
        },
        "date": 1654631476215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5276321300551012,
            "unit": "iter/sec",
            "range": "stddev: 0.007357273176118776",
            "extra": "mean: 1.8952598658000013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.168192167009012,
            "unit": "iter/sec",
            "range": "stddev: 0.008468613714797638",
            "extra": "mean: 122.42611088888901 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19662842795036695,
            "unit": "iter/sec",
            "range": "stddev: 0.015093834337135657",
            "extra": "mean: 5.085734603200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arthurpinheiro@protonmail.com",
            "name": "Arthur Pinheiro",
            "username": "xilopaint"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7dc37078012f7a4497d8e5fb3e34da647790c9e",
          "message": "MAINT: Export `PageObject` in PyPDF2 root (#960)",
          "timestamp": "2022-06-08T09:17:16+02:00",
          "tree_id": "92b7ee150fca37dc0a7c9a050c85d7cdef57a2bd",
          "url": "https://github.com/py-pdf/PyPDF2/commit/a7dc37078012f7a4497d8e5fb3e34da647790c9e"
        },
        "date": 1654672712408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6198548129171315,
            "unit": "iter/sec",
            "range": "stddev: 0.011011595563993757",
            "extra": "mean: 1.6132810122000136 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.440413165648424,
            "unit": "iter/sec",
            "range": "stddev: 0.007549789559017618",
            "extra": "mean: 105.92756720000125 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22558743237983822,
            "unit": "iter/sec",
            "range": "stddev: 0.011945410740478533",
            "extra": "mean: 4.432871057800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1d15f4a151280c9ba07997e4323a5e79d88ed74",
          "message": "TST: Xmp module (#962)",
          "timestamp": "2022-06-09T13:43:34+02:00",
          "tree_id": "ef9bd6101dbdf5216d9c5e5d0da0cbc1ba96fa32",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d1d15f4a151280c9ba07997e4323a5e79d88ed74"
        },
        "date": 1654775086296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6240095754339279,
            "unit": "iter/sec",
            "range": "stddev: 0.004968888497922611",
            "extra": "mean: 1.6025395111999898 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.566491235330604,
            "unit": "iter/sec",
            "range": "stddev: 0.005551767604682683",
            "extra": "mean: 104.53153359999305 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2294212912967986,
            "unit": "iter/sec",
            "range": "stddev: 0.013233585817421805",
            "extra": "mean: 4.358793354999977 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53f0b53600ad50ed4b9fbb2a80b0871d0ec3061e",
          "message": "TST: FlateDecode.decode decodeParms (#964)",
          "timestamp": "2022-06-09T14:38:49+02:00",
          "tree_id": "6f586f1cc04fc2dfdef42f6f9f40c303ae352fde",
          "url": "https://github.com/py-pdf/PyPDF2/commit/53f0b53600ad50ed4b9fbb2a80b0871d0ec3061e"
        },
        "date": 1654778419393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5234546607936486,
            "unit": "iter/sec",
            "range": "stddev: 0.04073406190635866",
            "extra": "mean: 1.910385129600003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.166259065028576,
            "unit": "iter/sec",
            "range": "stddev: 0.0037960465588685152",
            "extra": "mean: 122.45509137500044 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19860924069076719,
            "unit": "iter/sec",
            "range": "stddev: 0.3208149029710302",
            "extra": "mean: 5.035012452200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "332fa5e33fe1839a6ad486dc34722d0eb800a665",
          "message": "DOC: Who uses PyPDF2",
          "timestamp": "2022-06-09T18:38:51+02:00",
          "tree_id": "98902a5f8687c88f25fb3eaed0321587e22a572c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/332fa5e33fe1839a6ad486dc34722d0eb800a665"
        },
        "date": 1654792811820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6198716468973078,
            "unit": "iter/sec",
            "range": "stddev: 0.03275851996744488",
            "extra": "mean: 1.6132371999999975 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.669383351795206,
            "unit": "iter/sec",
            "range": "stddev: 0.008297877495056515",
            "extra": "mean: 103.41921129999889 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.23082985936818792,
            "unit": "iter/sec",
            "range": "stddev: 0.03354404010116556",
            "extra": "mean: 4.332195161999982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ztravis@everlaw.com",
            "name": "ztravis",
            "username": "ztravis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cd0cfe17c34c0fea89a94a92af7f061e67831ec",
          "message": "PI: Optimize read_next_end_line (#646)\n\nread_next_end_line is inefficient when handling long lines. If the stream is a buffered binary stream, each one-byte \"backwards\" read may trigger a full buffer read, and (more significantly) iteratively building the line we want to return is quadratic in its total length.",
          "timestamp": "2022-06-09T18:42:21+02:00",
          "tree_id": "7727a0f290483a6d2ef04ab30feac21033352a98",
          "url": "https://github.com/py-pdf/PyPDF2/commit/8cd0cfe17c34c0fea89a94a92af7f061e67831ec"
        },
        "date": 1654793019286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6194154725118173,
            "unit": "iter/sec",
            "range": "stddev: 0.014989446332443758",
            "extra": "mean: 1.614425283799997 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.668532379833614,
            "unit": "iter/sec",
            "range": "stddev: 0.0061301398414162905",
            "extra": "mean: 103.42831369999601 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22947172717244738,
            "unit": "iter/sec",
            "range": "stddev: 0.016271576127717003",
            "extra": "mean: 4.357835330399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336d659c41dca4bce9554f70a8586fb1450dd676",
          "message": "MAINT: Mark read_next_end_line as deprecated (#965)\n\nread_next_end_line was removed with #646, but we need to keep it in order to keep backwards compatibility.",
          "timestamp": "2022-06-09T18:59:06+02:00",
          "tree_id": "ddf76cec034e973d222854955b9b553e9f20e1e8",
          "url": "https://github.com/py-pdf/PyPDF2/commit/336d659c41dca4bce9554f70a8586fb1450dd676"
        },
        "date": 1654794041613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.4524194119713282,
            "unit": "iter/sec",
            "range": "stddev: 0.038223830538036276",
            "extra": "mean: 2.210338401799997 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.073713669639708,
            "unit": "iter/sec",
            "range": "stddev: 0.004917896143729355",
            "extra": "mean: 141.36845887500192 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.1653321660277516,
            "unit": "iter/sec",
            "range": "stddev: 0.07303145213725788",
            "extra": "mean: 6.048429800600002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df8f12127aad2c2faa97615e6cd8a766b0ca5ed3",
          "message": "BUG: Adobe Acrobat 'Would you like to save this file?' (#970)\n\nIssue: When creating files with the current PpdfWriter,\r\nAdobe Acrobat asks 'would you like to save this file'\r\nwhen attempting to close it - although no changes were made.\r\n\r\nFix: Remove 'self.set_need_appearances_writer()' from writers\r\n     __init__ function\r\n\r\nCaused-by: #412 (see #355)\r\n\r\nCloses #963\r\n\r\nCo-authored-by: pubpub-zz <4083478+pubpub-zz@users.noreply.github.com>",
          "timestamp": "2022-06-11T14:22:23+02:00",
          "tree_id": "c3a635eb956934db6640f73eb850107a448a10a4",
          "url": "https://github.com/py-pdf/PyPDF2/commit/df8f12127aad2c2faa97615e6cd8a766b0ca5ed3"
        },
        "date": 1654950234256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5038315236623337,
            "unit": "iter/sec",
            "range": "stddev: 0.041521767402438944",
            "extra": "mean: 1.9847904567999932 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.885847520487757,
            "unit": "iter/sec",
            "range": "stddev: 0.008526223833783113",
            "extra": "mean: 126.80945166666724 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.18588710921600757,
            "unit": "iter/sec",
            "range": "stddev: 0.10872839660462243",
            "extra": "mean: 5.379609184399999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55f7c7b35be4431336a8c5a769a7c261445bd47a",
          "message": "STY: Use more tuples and list/dict comprehensions (#976)",
          "timestamp": "2022-06-12T10:18:09+02:00",
          "tree_id": "9c98a716e6f8b603596bf4c4a6c4ecbd8b7e84c6",
          "url": "https://github.com/py-pdf/PyPDF2/commit/55f7c7b35be4431336a8c5a769a7c261445bd47a"
        },
        "date": 1655021956495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6189742283226757,
            "unit": "iter/sec",
            "range": "stddev: 0.023772070550596727",
            "extra": "mean: 1.6155761487999996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.724294582848039,
            "unit": "iter/sec",
            "range": "stddev: 0.006230052060353172",
            "extra": "mean: 102.83522279999886 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22954015042013579,
            "unit": "iter/sec",
            "range": "stddev: 0.02353284467230491",
            "extra": "mean: 4.356536310400003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "084745fc51f105f01282c879ed6a18b5b15acbc5",
          "message": "MAINT: pre-commit / requirements.txt updates (#977)",
          "timestamp": "2022-06-12T10:29:47+02:00",
          "tree_id": "cb9b0478116dff8694c7780fdcbdcf7b7225e952",
          "url": "https://github.com/py-pdf/PyPDF2/commit/084745fc51f105f01282c879ed6a18b5b15acbc5"
        },
        "date": 1655022670527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5237816626107991,
            "unit": "iter/sec",
            "range": "stddev: 0.03442460914405988",
            "extra": "mean: 1.9091924582000104 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.197066310542784,
            "unit": "iter/sec",
            "range": "stddev: 0.003931856254474283",
            "extra": "mean: 121.99486525000225 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.1962941927454944,
            "unit": "iter/sec",
            "range": "stddev: 0.06653331623091029",
            "extra": "mean: 5.094394215199998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8149026b0b7e2dbb328aff78fd674bbdc7bbc3b8",
          "message": "ENH: Add support for pathlib as input for PdfReader (#979)",
          "timestamp": "2022-06-12T13:11:39+02:00",
          "tree_id": "f79b8da3c643d507de3019a8adf00d96469d0326",
          "url": "https://github.com/py-pdf/PyPDF2/commit/8149026b0b7e2dbb328aff78fd674bbdc7bbc3b8"
        },
        "date": 1655032366942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6110192931400946,
            "unit": "iter/sec",
            "range": "stddev: 0.04168416050200808",
            "extra": "mean: 1.6366095329999992 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.710170067025734,
            "unit": "iter/sec",
            "range": "stddev: 0.005735377217202816",
            "extra": "mean: 102.98480800000078 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22997617713071353,
            "unit": "iter/sec",
            "range": "stddev: 0.03183254689992185",
            "extra": "mean: 4.348276471399998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41eff2a059ee4f4a9cbca931a110e65a3521bcd7",
          "message": "TST: Add MCVE of issue #416 (#980)",
          "timestamp": "2022-06-12T14:02:45+02:00",
          "tree_id": "3db10df8806ed790252cb1f7b3f772052fbdc2e6",
          "url": "https://github.com/py-pdf/PyPDF2/commit/41eff2a059ee4f4a9cbca931a110e65a3521bcd7"
        },
        "date": 1655035435839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.613796619204195,
            "unit": "iter/sec",
            "range": "stddev: 0.006552381860389591",
            "extra": "mean: 1.6292041511999997 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.700777998999898,
            "unit": "iter/sec",
            "range": "stddev: 0.006139808950785802",
            "extra": "mean: 103.0845155000037 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2309424686771713,
            "unit": "iter/sec",
            "range": "stddev: 0.020098646633538508",
            "extra": "mean: 4.330082750599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "363372c11005a0ff1dd72b4ff66b5097987d3df6",
          "message": "DOC: Notes on annotations (#982)",
          "timestamp": "2022-06-12T18:04:43+02:00",
          "tree_id": "3d3f6c85c201ea7180363072f5c37f42614f7582",
          "url": "https://github.com/py-pdf/PyPDF2/commit/363372c11005a0ff1dd72b4ff66b5097987d3df6"
        },
        "date": 1655049950138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6174311176109448,
            "unit": "iter/sec",
            "range": "stddev: 0.007159148538809019",
            "extra": "mean: 1.6196138670000095 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.604462983418456,
            "unit": "iter/sec",
            "range": "stddev: 0.007357280418185147",
            "extra": "mean: 104.1182627000012 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22802086837483473,
            "unit": "iter/sec",
            "range": "stddev: 0.023510727573323512",
            "extra": "mean: 4.385563510599996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "a15cf67173a81523ff3e9eab3ac5ee98429841c2",
          "message": "DEV: Add PI to make_changelog",
          "timestamp": "2022-06-12T18:08:30+02:00",
          "tree_id": "71024cf6f9d03685b1100036aa82c3d505899fee",
          "url": "https://github.com/py-pdf/PyPDF2/commit/a15cf67173a81523ff3e9eab3ac5ee98429841c2"
        },
        "date": 1655050182527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6253421216261991,
            "unit": "iter/sec",
            "range": "stddev: 0.004406285625831991",
            "extra": "mean: 1.5991246477999994 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.711909170153897,
            "unit": "iter/sec",
            "range": "stddev: 0.007377327677019517",
            "extra": "mean: 102.96636660000331 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2328687867780546,
            "unit": "iter/sec",
            "range": "stddev: 0.027809929745674297",
            "extra": "mean: 4.294263794799997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "9c4e7f52fb3c53ed6391d4a96e227116a9473acf",
          "message": "REL: 2.1.1\n\nNew Features (ENH):\n-  Add support for pathlib as input for PdfReader (#979)\n\nPerformance Improvements (PI):\n-  Optimize read_next_end_line (#646)\n\nBug Fixes (BUG):\n-  Adobe Acrobat \\'Would you like to save this file?\\' (#970)\n\nDocumentation (DOC):\n-  Notes on annotations (#982)\n-  Who uses PyPDF2\n-  intendet \\xe2\\x9e\\x94 in robustness page  (#958)\n\nMaintenance (MAINT):\n-  pre-commit / requirements.txt updates (#977)\n-  Mark read_next_end_line as deprecated (#965)\n-  Export `PageObject` in PyPDF2 root (#960)\n\nTesting (TST):\n-  Add MCVE of issue #416 (#980)\n-  FlateDecode.decode decodeParms (#964)\n-  Xmp module (#962)\n-  utils.paeth_predictor (#959)\n\nCode Style (STY):\n-  Use more tuples and list/dict comprehensions (#976)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/2.1.0...2.1.1",
          "timestamp": "2022-06-12T18:09:37+02:00",
          "tree_id": "b1cd9b621e479f36784f0489bef278e14fe72e65",
          "url": "https://github.com/py-pdf/PyPDF2/commit/9c4e7f52fb3c53ed6391d4a96e227116a9473acf"
        },
        "date": 1655050296219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.45877601283803277,
            "unit": "iter/sec",
            "range": "stddev: 0.023922487203348976",
            "extra": "mean: 2.1797129143999996 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.028330257471669,
            "unit": "iter/sec",
            "range": "stddev: 0.009814533112778199",
            "extra": "mean: 142.28130485714172 msec\nrounds: 7"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.17337457224514943,
            "unit": "iter/sec",
            "range": "stddev: 0.08641363254316417",
            "extra": "mean: 5.767858498800001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4083478+pubpub-zz@users.noreply.github.com",
            "name": "pubpub-zz",
            "username": "pubpub-zz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72fcaae50e9676ca16346a556c29b688ae2714f8",
          "message": "ENH: Text Extraction improvements (#969)\n\n* Improvements around /Encoding / /ToUnicode\r\n* Extraction of CMaps improved\r\n* Fallback for font def missing\r\n* Support for /Identity-H and /Identity-V: utf-16-be\r\n* Support for /GB-EUC-H / /GB-EUC-V / GBp/c-EUC-H / /GBpc-EUC-V (beta release for evaluation)\r\n* Arabic (for evaluation)\r\n* Whitespace extraction improvements",
          "timestamp": "2022-06-13T21:40:43+02:00",
          "tree_id": "a353ad6f36239580ee0c9f3bbbc6f4f170b08281",
          "url": "https://github.com/py-pdf/PyPDF2/commit/72fcaae50e9676ca16346a556c29b688ae2714f8"
        },
        "date": 1655149314974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6238667778931499,
            "unit": "iter/sec",
            "range": "stddev: 0.011959801989632098",
            "extra": "mean: 1.6029063181999903 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.613936257398946,
            "unit": "iter/sec",
            "range": "stddev: 0.006410231173057463",
            "extra": "mean: 104.01566780000167 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.21691445127493675,
            "unit": "iter/sec",
            "range": "stddev: 0.028356942333540334",
            "extra": "mean: 4.61011239280001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "f0cd8292da2dfe020d4042e16b42b24aa2378dd3",
          "message": "REL: 2.2.0\n\nThe 2.2.0 release improves text extraction again via (#969):\n\n* Improvements around /Encoding / /ToUnicode\n* Extraction of CMaps improved\n* Fallback for font def missing\n* Support for /Identity-H and /Identity-V: utf-16-be\n* Support for /GB-EUC-H / /GB-EUC-V / GBp/c-EUC-H / /GBpc-EUC-V (beta release for evaluation)\n* Arabic (for evaluation)\n* Whitespace extraction improvements\n\nThose changes should mainly improve the text extraction for non-ASCII alphabets,\ne.g. Russian / Chinese / Japanese / Korean / Arabic.\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/2.1.1...2.2.0",
          "timestamp": "2022-06-13T21:45:28+02:00",
          "tree_id": "5c2ecbe33b1f967cc9fd0c7d01894c2e08c64521",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f0cd8292da2dfe020d4042e16b42b24aa2378dd3"
        },
        "date": 1655149647565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.44268114584711626,
            "unit": "iter/sec",
            "range": "stddev: 0.06830016061664344",
            "extra": "mean: 2.258962256199993 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.9581196314600025,
            "unit": "iter/sec",
            "range": "stddev: 0.0033557399783245927",
            "extra": "mean: 125.6578244999993 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.1787840061963882,
            "unit": "iter/sec",
            "range": "stddev: 0.08493061521811243",
            "extra": "mean: 5.5933414921999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8441da42d49551c7fc178b31d516998acff84e83",
          "message": "PI: Remove b_ calls (#986)\n\nFunction calls are cheap, but not for free in Python.\r\nThe b_ function converts a string to a bytes object. When we have\r\na constant string, we can use the constant byte representation\r\ninstead (a b\"byte literal\" instead of b_(\"string literal\"))",
          "timestamp": "2022-06-14T12:35:43+02:00",
          "tree_id": "f419c1304655e296396236af7c130625698b5a63",
          "url": "https://github.com/py-pdf/PyPDF2/commit/8441da42d49551c7fc178b31d516998acff84e83"
        },
        "date": 1655203013478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6658896852734139,
            "unit": "iter/sec",
            "range": "stddev: 0.007111535799373589",
            "extra": "mean: 1.5017502480000133 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.900811715078332,
            "unit": "iter/sec",
            "range": "stddev: 0.00794771558373348",
            "extra": "mean: 101.00181972727155 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.25487888165050904,
            "unit": "iter/sec",
            "range": "stddev: 0.0327202634295768",
            "extra": "mean: 3.9234321554000076 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "712c16dd73e1ecacf5afed1da58b5eb2ccffd000",
          "message": "DOC: Remove reference to Scripts (#987)\n\nCloses #985",
          "timestamp": "2022-06-14T12:38:08+02:00",
          "tree_id": "ab2d9d5e49b5a85b7804ae4ffd8679b5f0bfc252",
          "url": "https://github.com/py-pdf/PyPDF2/commit/712c16dd73e1ecacf5afed1da58b5eb2ccffd000"
        },
        "date": 1655203167338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.5704879013606602,
            "unit": "iter/sec",
            "range": "stddev: 0.00795389861735368",
            "extra": "mean: 1.7528855522 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.483493965070943,
            "unit": "iter/sec",
            "range": "stddev: 0.007423711667371854",
            "extra": "mean: 117.875960555556 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.21677975953201117,
            "unit": "iter/sec",
            "range": "stddev: 0.019266400243769487",
            "extra": "mean: 4.6129767934 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f5201e2bee7e97bc04f2844c4dd0a5368c7be18",
          "message": "PI: Remove b_ calls (#992)\n\nSee also: #986\r\n\r\nAlso: Minor type improvement",
          "timestamp": "2022-06-14T20:27:34+02:00",
          "tree_id": "950a6e8a842d13148d2424f143d2ff83659d578a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/8f5201e2bee7e97bc04f2844c4dd0a5368c7be18"
        },
        "date": 1655231316962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9760165754224598,
            "unit": "iter/sec",
            "range": "stddev: 0.010061101088401546",
            "extra": "mean: 1.0245727636000026 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.413183831392226,
            "unit": "iter/sec",
            "range": "stddev: 0.0066149778496518786",
            "extra": "mean: 96.03210854545162 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26110126839922587,
            "unit": "iter/sec",
            "range": "stddev: 0.024672083069376866",
            "extra": "mean: 3.829931605199988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e47e057e9289a5a33b352a49f5b9b3a2af8742e0",
          "message": "PI: Apply improvements to _utils suggested by perflint (#993)",
          "timestamp": "2022-06-14T20:43:17+02:00",
          "tree_id": "474f8d066f26a03ead9e5dac2be1918e59fc0c1e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e47e057e9289a5a33b352a49f5b9b3a2af8742e0"
        },
        "date": 1655232258106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9694032220491575,
            "unit": "iter/sec",
            "range": "stddev: 0.005380675920287689",
            "extra": "mean: 1.031562488399993 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.369503259240815,
            "unit": "iter/sec",
            "range": "stddev: 0.006866208781360404",
            "extra": "mean: 96.43663490908754 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2636198923582518,
            "unit": "iter/sec",
            "range": "stddev: 0.014565427472591501",
            "extra": "mean: 3.793340445800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e292822ad9e481ef17384e69769dc7b4d1681870",
          "message": "TST: Add tests for XMP information (#996)",
          "timestamp": "2022-06-15T07:50:21+02:00",
          "tree_id": "f257cfef83c723a12341e9aa9c0491fbb84afb05",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e292822ad9e481ef17384e69769dc7b4d1681870"
        },
        "date": 1655272301383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.7251356543029497,
            "unit": "iter/sec",
            "range": "stddev: 0.009204115854784626",
            "extra": "mean: 1.3790523111999904 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.924500337372118,
            "unit": "iter/sec",
            "range": "stddev: 0.002387837390621819",
            "extra": "mean: 126.19092149999389 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19789114145969272,
            "unit": "iter/sec",
            "range": "stddev: 0.10390335577635496",
            "extra": "mean: 5.0532832982000055 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4083478+pubpub-zz@users.noreply.github.com",
            "name": "pubpub-zz",
            "username": "pubpub-zz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "034d7a9aaf48432fad0970edd5a59841702203f5",
          "message": "ROB : utf-16-be' codec can't decode (...) (#995)\n\nCloses #988",
          "timestamp": "2022-06-15T20:36:51+02:00",
          "tree_id": "a1bd85177086f2f1918ac2abc606dcffd0268436",
          "url": "https://github.com/py-pdf/PyPDF2/commit/034d7a9aaf48432fad0970edd5a59841702203f5"
        },
        "date": 1655318273539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.974164880828896,
            "unit": "iter/sec",
            "range": "stddev: 0.005609308836243069",
            "extra": "mean: 1.0265202736000105 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.332738508888722,
            "unit": "iter/sec",
            "range": "stddev: 0.00511675707445432",
            "extra": "mean: 96.7797645454544 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26722496095069176,
            "unit": "iter/sec",
            "range": "stddev: 0.02259375460058008",
            "extra": "mean: 3.7421653891999993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ce36f7ab6a66a7fce83e7c101dd5167e45e5613",
          "message": "TST: Improve test coverage by extracting texts (#998)",
          "timestamp": "2022-06-16T10:55:15+02:00",
          "tree_id": "edccd54346f15bca621a89051ea7d7b13fd784f3",
          "url": "https://github.com/py-pdf/PyPDF2/commit/6ce36f7ab6a66a7fce83e7c101dd5167e45e5613"
        },
        "date": 1655369790897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9506659352798031,
            "unit": "iter/sec",
            "range": "stddev: 0.0094299572614412",
            "extra": "mean: 1.051894217400013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.162170437914352,
            "unit": "iter/sec",
            "range": "stddev: 0.007548943347155935",
            "extra": "mean: 98.40417518181641 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2574983527266455,
            "unit": "iter/sec",
            "range": "stddev: 0.01548085819896498",
            "extra": "mean: 3.883519989199999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "faebc9da1567af676edf69803e31fc61396fab93",
          "message": "STY: Apply fixes suggested by pylint (#999)\n\n* Use f-strings: They are IMHO more readable and faster than other formatting options\r\n* Reduce code duplication\r\n* Improvements in type annotations\r\n* Add PyPDF2 module docstring for help text",
          "timestamp": "2022-06-16T13:58:14+02:00",
          "tree_id": "10dffcda58da3e06f463d7327f5c9988c420a7e6",
          "url": "https://github.com/py-pdf/PyPDF2/commit/faebc9da1567af676edf69803e31fc61396fab93"
        },
        "date": 1655380770482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.8225766710837669,
            "unit": "iter/sec",
            "range": "stddev: 0.008314234669688064",
            "extra": "mean: 1.2156921478000016 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.812169592107175,
            "unit": "iter/sec",
            "range": "stddev: 0.00768160558077237",
            "extra": "mean: 113.4794320000007 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22474109524674507,
            "unit": "iter/sec",
            "range": "stddev: 0.018917795994089735",
            "extra": "mean: 4.449564504 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ccf4849f0933b34d6f1e1d8f1c360e7620bba42",
          "message": "DEV: Fix type annotations for add_bookmarks (#1000)",
          "timestamp": "2022-06-16T16:55:17+02:00",
          "tree_id": "57a68406792715c6d95a73f24a7a663c832addc2",
          "url": "https://github.com/py-pdf/PyPDF2/commit/1ccf4849f0933b34d6f1e1d8f1c360e7620bba42"
        },
        "date": 1655391404326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.6890046159660322,
            "unit": "iter/sec",
            "range": "stddev: 0.024292111102718283",
            "extra": "mean: 1.4513690863999955 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 7.424477118994786,
            "unit": "iter/sec",
            "range": "stddev: 0.006788092505252368",
            "extra": "mean: 134.68961975000227 msec\nrounds: 8"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.19152049000576207,
            "unit": "iter/sec",
            "range": "stddev: 0.08468760655479031",
            "extra": "mean: 5.221373441399999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb93367f95c9db76bb759e1b0a9d24aa1c10bf90",
          "message": "TST: Add test for PdfMerger (#1001)\n\nBUG: Add file handles of reader early to list so that it can be closed in case of a catched exception",
          "timestamp": "2022-06-16T21:24:03+02:00",
          "tree_id": "48d61e2d8066750770e75cef9ce815f76f1c3b80",
          "url": "https://github.com/py-pdf/PyPDF2/commit/bb93367f95c9db76bb759e1b0a9d24aa1c10bf90"
        },
        "date": 1655407515579,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.8185114761045884,
            "unit": "iter/sec",
            "range": "stddev: 0.050185769451911395",
            "extra": "mean: 1.2217299686000018 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.683329721111537,
            "unit": "iter/sec",
            "range": "stddev: 0.010115184473849527",
            "extra": "mean: 115.16319570000064 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22963236061463574,
            "unit": "iter/sec",
            "range": "stddev: 0.10751637486912834",
            "extra": "mean: 4.354786918199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6b66b16f605cece73b45fc488ef9d2d75662446",
          "message": "TST: reader.get_fields (#1002)",
          "timestamp": "2022-06-16T22:57:57+02:00",
          "tree_id": "51f5c6cc7f622ab1c424ed7b1a4f24026f8b175e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/a6b66b16f605cece73b45fc488ef9d2d75662446"
        },
        "date": 1655413166154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.8219682347317961,
            "unit": "iter/sec",
            "range": "stddev: 0.008099461504109633",
            "extra": "mean: 1.2165920260000007 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 8.787756634215107,
            "unit": "iter/sec",
            "range": "stddev: 0.008467119136413336",
            "extra": "mean: 113.79468522222187 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.22454820015276128,
            "unit": "iter/sec",
            "range": "stddev: 0.015089571938094447",
            "extra": "mean: 4.453386842200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8ad456e534b46583ebbfed41b10b4889bf95fa",
          "message": "TST: reader.get_fields / zlib issue / LZW decode issue (#1004)",
          "timestamp": "2022-06-17T09:55:18+02:00",
          "tree_id": "fb03fc63d732053e2c3dc1e222e22ee99ed77711",
          "url": "https://github.com/py-pdf/PyPDF2/commit/bf8ad456e534b46583ebbfed41b10b4889bf95fa"
        },
        "date": 1655452580964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9631382068728982,
            "unit": "iter/sec",
            "range": "stddev: 0.006535924326639555",
            "extra": "mean: 1.038272589400003 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 10.402483589552036,
            "unit": "iter/sec",
            "range": "stddev: 0.006205210737651507",
            "extra": "mean: 96.13088945455027 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2652156873560553,
            "unit": "iter/sec",
            "range": "stddev: 0.028587863919452786",
            "extra": "mean: 3.7705160277999994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "91b3e8a89487fe64dad73beff2b2c96e88f8c83d",
          "message": "REL: 2.2.1\n\nPerformance Improvements (PI):\n-  Remove b_ calls (#992, #986)\n-  Apply improvements to _utils suggested by perflint (#993)\n\nRobustness (ROB):\n-  utf-16-be\\' codec can\\'t decode (...) (#995)\n\nDocumentation (DOC):\n-  Remove reference to Scripts (#987)\n\nDeveloper Experience (DEV):\n-  Fix type annotations for add_bookmarks (#1000)\n\nTesting (TST):\n-  Add test for PdfMerger (#1001)\n-  Add tests for XMP information (#996)\n-  reader.get_fields / zlib issue / LZW decode issue (#1004)\n-  reader.get_fields with report generation (#1002)\n-  Improve test coverage by extracting texts (#998)\n\nCode Style (STY):\n-  Apply fixes suggested by pylint (#999)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/2.2.0...2.2.1",
          "timestamp": "2022-06-17T13:20:49+02:00",
          "tree_id": "9f5f5771693eab9c87db2228453913eecf6b746a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/91b3e8a89487fe64dad73beff2b2c96e88f8c83d"
        },
        "date": 1655464938519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.831175827657207,
            "unit": "iter/sec",
            "range": "stddev: 0.03477858025420831",
            "extra": "mean: 1.2031148725999998 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.201466145421007,
            "unit": "iter/sec",
            "range": "stddev: 0.006466518673642589",
            "extra": "mean: 108.67833280000028 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.23204174436104527,
            "unit": "iter/sec",
            "range": "stddev: 0.04918283833400809",
            "extra": "mean: 4.309569395600002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "c540896a349587addfd172344db3b504569f0545",
          "message": "TST: Add mutmut config",
          "timestamp": "2022-06-17T17:58:49+02:00",
          "tree_id": "667df526ce6a90b9599578e9b80f1ea56f75db3c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c540896a349587addfd172344db3b504569f0545"
        },
        "date": 1655481609790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.8549551538771368,
            "unit": "iter/sec",
            "range": "stddev: 0.010425898139371509",
            "extra": "mean: 1.1696519934000036 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.199865362914256,
            "unit": "iter/sec",
            "range": "stddev: 0.007744396943551764",
            "extra": "mean: 108.69724290000136 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.23480566119798402,
            "unit": "iter/sec",
            "range": "stddev: 0.029709252514727873",
            "extra": "mean: 4.258841098200003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "89eb626a7a7e22937b9216e817f5882431196b24",
          "message": "REL: 3.15.2\n\n## What's new\n\n### Security (SEC)\n-  Avoid endless recursion of reading damaged PDF file (#2093)\n\n### Performance Improvements (PI)\n-  Re-use content stream (#2101)\n\n### Maintenance (MAINT)\n-  Make ParseError inherit from PyPdfError (#2097)\n\n[Full Changelog](https://github.com/py-pdf/pypdf/compare/3.15.1...3.15.2)",
          "timestamp": "2023-08-20T21:27:52+02:00",
          "tree_id": "275bb9ff01dfba06be3324d52fc5cbcbdb3d0098",
          "url": "https://github.com/labike/PyPDF2/commit/89eb626a7a7e22937b9216e817f5882431196b24"
        },
        "date": 1692599963189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 0.9409785799145901,
            "unit": "iter/sec",
            "range": "stddev: 0.0064562678936300666",
            "extra": "mean: 1.062723447000002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.612169789908606,
            "unit": "iter/sec",
            "range": "stddev: 0.013414535385850534",
            "extra": "mean: 104.03478318182185 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.18507676533101325,
            "unit": "iter/sec",
            "range": "stddev: 0.018982480188101235",
            "extra": "mean: 5.4031633749999965 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 9.00317301527545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005862464458004162",
            "extra": "mean: 111.07195188888694 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.031102674769962237,
            "unit": "iter/sec",
            "range": "stddev: 0.059078007257737944",
            "extra": "mean: 32.1515756248 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "4c511f98795f348bcdefee8476de24c5960b5649",
          "message": "REL: 3.15.3\n\n### Bug Fixes (BUG)\n-  Check version of crypt provider (#2115)\n-  TypeError: can't concat str to bytes (#2114)\n-  Require flit_core >= 3.9 (#2091)\n\n[Full Changelog](https://github.com/py-pdf/pypdf/compare/3.15.2...3.15.3)",
          "timestamp": "2023-08-26T09:22:54+02:00",
          "tree_id": "f4cb42067a0965a4309e1cd7cfb091a982ae37ad",
          "url": "https://github.com/labike/PyPDF2/commit/4c511f98795f348bcdefee8476de24c5960b5649"
        },
        "date": 1693035256638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 1.105129483095968,
            "unit": "iter/sec",
            "range": "stddev: 0.023574022142922924",
            "extra": "mean: 904.8713434000035 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 11.22496386164962,
            "unit": "iter/sec",
            "range": "stddev: 0.009581268834596332",
            "extra": "mean: 89.08714650000131 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2151130840148908,
            "unit": "iter/sec",
            "range": "stddev: 0.05275075822098495",
            "extra": "mean: 4.648717694600004 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 10.82458821797002,
            "unit": "iter/sec",
            "range": "stddev: 0.0004727877967846216",
            "extra": "mean: 92.38226709999822 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.03691965522478929,
            "unit": "iter/sec",
            "range": "stddev: 0.07432796053291214",
            "extra": "mean: 27.085843405399988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "ba9491c591fc7c5e2a33776b7e6006a3101dfc23",
          "message": "Bump sample-files",
          "timestamp": "2023-10-07T09:54:20+02:00",
          "tree_id": "c8e67c0d512c491a6d85f57e78d954b2c4045652",
          "url": "https://github.com/labike/PyPDF2/commit/ba9491c591fc7c5e2a33776b7e6006a3101dfc23"
        },
        "date": 1696667017891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 2.1653719709881742,
            "unit": "iter/sec",
            "range": "stddev: 0.010837290124721666",
            "extra": "mean: 461.8144195999946 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 9.620970078815091,
            "unit": "iter/sec",
            "range": "stddev: 0.011366080383470352",
            "extra": "mean: 103.9396226999969 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.18114708779611793,
            "unit": "iter/sec",
            "range": "stddev: 0.022978400323374597",
            "extra": "mean: 5.520375801599999 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 8.745167540662905,
            "unit": "iter/sec",
            "range": "stddev: 0.0002838601633730122",
            "extra": "mean: 114.34886700000233 msec\nrounds: 9"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.030577553875684026,
            "unit": "iter/sec",
            "range": "stddev: 0.10703245264909966",
            "extra": "mean: 32.70372784119998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "phanthanhduypr@gmail.com",
            "name": "Phan Thanh Duy",
            "username": "zuypt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6cb5343f45a06a85b7c94296afe71e6d6c411727",
          "message": "Update _base.py (#2325)\n\nSince b\"\" is not mutable it causes python to allocate and deallocate memory repeatedly in the for loop which cause hang/long runtime when handle very large string.\r\n\r\nFor example when using add_js(javascript) to  to add a very big `javascript` bytestring.",
          "timestamp": "2023-12-04T21:11:12+01:00",
          "tree_id": "067ef7462094739a232749b75ad7ded71eef44c2",
          "url": "https://github.com/labike/PyPDF2/commit/6cb5343f45a06a85b7c94296afe71e6d6c411727"
        },
        "date": 1701755438986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.3043541343575895,
            "unit": "iter/sec",
            "range": "stddev: 0.024125500972442572",
            "extra": "mean: 302.63100120000104 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.585797258896877,
            "unit": "iter/sec",
            "range": "stddev: 0.00785504898127583",
            "extra": "mean: 79.45464076922913 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2733677721250776,
            "unit": "iter/sec",
            "range": "stddev: 0.011974961685323984",
            "extra": "mean: 3.658075684000002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.990046988512802,
            "unit": "iter/sec",
            "range": "stddev: 0.0003543185239165927",
            "extra": "mean: 55.58629172222456 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.055682871372823316,
            "unit": "iter/sec",
            "range": "stddev: 0.06937966241787198",
            "extra": "mean: 17.958843991799995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s.bourlon@gmail.com",
            "name": "Stefan Bourlon",
            "username": "sbourlon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efe779008594eb5c8e8ce8870b732602d54ccc75",
          "message": "BUG: encode_pdfdocencoding() always returns bytes (#2440)\n\nIn the function encode_pdfdocencoding, cast its return value\r\nfrom bytearray to bytes to match its function signature.\r\n\r\nThis casting is necessary because bytearray is duck type\r\ncompatible with bytes in mypy, however this library expects only\r\nbytes in its Encryption class.\r\n\r\nFixes #2434.",
          "timestamp": "2024-02-20T20:30:29+01:00",
          "tree_id": "b597cb70913c3744caebcfe8e97d83dedf40ab86",
          "url": "https://github.com/labike/PyPDF2/commit/efe779008594eb5c8e8ce8870b732602d54ccc75"
        },
        "date": 1708667008747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.298984162874889,
            "unit": "iter/sec",
            "range": "stddev: 0.0024531567374480243",
            "extra": "mean: 303.1236133999968 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.683663058818428,
            "unit": "iter/sec",
            "range": "stddev: 0.008214867728786917",
            "extra": "mean: 78.84157718181744 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2686528106054145,
            "unit": "iter/sec",
            "range": "stddev: 0.023210636078254854",
            "extra": "mean: 3.7222763378000026 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.270213069567955,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260750148494083",
            "extra": "mean: 57.9031651764686 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.061906023959819735,
            "unit": "iter/sec",
            "range": "stddev: 0.12912614900375347",
            "extra": "mean: 16.153516831400005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120829237+j-t-1@users.noreply.github.com",
            "name": "j-t-1",
            "username": "j-t-1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c943f5f75ea001e9abeed551e004c1fd25a7f038",
          "message": "DOC: Minor readability increases (#2515)\n\n1. Sort the API reference, de-emphasizing the deprecated PdfMerger.\r\n2. Add new lines to .pre-commit-config.yaml.",
          "timestamp": "2024-03-11T12:23:24+01:00",
          "tree_id": "24ec6126788fd24b7fef2f1f7c6aa7dc177658ab",
          "url": "https://github.com/labike/PyPDF2/commit/c943f5f75ea001e9abeed551e004c1fd25a7f038"
        },
        "date": 1710487323561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.282146428345604,
            "unit": "iter/sec",
            "range": "stddev: 0.0048409781013402505",
            "extra": "mean: 304.6786673999975 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.228166320284059,
            "unit": "iter/sec",
            "range": "stddev: 0.010135276818134222",
            "extra": "mean: 81.77841009090643 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.267814699526173,
            "unit": "iter/sec",
            "range": "stddev: 0.05577217988538394",
            "extra": "mean: 3.7339249928000013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.537198282807587,
            "unit": "iter/sec",
            "range": "stddev: 0.0010301040337542188",
            "extra": "mean: 57.02165099999694 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.06244373649026935,
            "unit": "iter/sec",
            "range": "stddev: 0.11816685764209392",
            "extra": "mean: 16.0144164364 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "stefan6419846",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "stefan6419846",
            "username": "stefan6419846"
          },
          "distinct": true,
          "id": "76759bde453509ae8d6c744777679037810fc3bf",
          "message": "REL: 5.8.0\n\n## What's new\n\n### New Features (ENH)\n- Implement flattening for writer (#3312) by @PJBrs\n\n### Bug Fixes (BUG)\n- Unterminated object when using PdfWriter with incremental=True (#3345) by @m32\n\n### Robustness (ROB)\n- Resolve some image extraction edge cases (#3371) by @stefan6419846\n- Ignore faulty trailing newline during RLE decoding (#3355) by @henningkoertelgmg\n- Gracefully handle odd-length strings in parse_bfchar (#3348) by @stefan6419846\n\n### Developer Experience (DEV)\n- Modernize license specifiers (#3338) by @stefan6419846\n\n### Maintenance (MAINT)\n- Reduce max-complexity of tool.ruff.lint.mccabe (#3365) by @j-t-1\n- Refactor text extraction code by @MartinThoma\n\n[Full Changelog](https://github.com/py-pdf/pypdf/compare/5.7.0...5.8.0)",
          "timestamp": "2025-07-13T14:49:56+02:00",
          "tree_id": "81e8bec5cf982f68db0ef37ef74ab9e130cb070b",
          "url": "https://github.com/labike/PyPDF2/commit/76759bde453509ae8d6c744777679037810fc3bf"
        },
        "date": 1752552699407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.5351137468026903,
            "unit": "iter/sec",
            "range": "stddev: 0.008704819682759645",
            "extra": "mean: 282.8763291999991 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.494043647073493,
            "unit": "iter/sec",
            "range": "stddev: 0.006538001239919256",
            "extra": "mean: 64.54093087499979 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2759709477340424,
            "unit": "iter/sec",
            "range": "stddev: 0.009563157599989944",
            "extra": "mean: 3.6235698293999987 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 18.20460917564237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006394021547780108",
            "extra": "mean: 54.93114355555583 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.0829725744430502,
            "unit": "iter/sec",
            "range": "stddev: 0.0819695894910209",
            "extra": "mean: 12.052175152 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3334942021623104,
            "unit": "iter/sec",
            "range": "stddev: 0.0019063147825893155",
            "extra": "mean: 749.9095221999937 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "Stefan",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5d19646dace2f2af5ecf64d76e0df6c7b4ae6b9",
          "message": "DOC: Fix typos and other possible issues detected by PyCharm (#3381)",
          "timestamp": "2025-07-15T17:51:07+02:00",
          "tree_id": "c83fe16c32c4ed0db228628f47fbef9133f6f09e",
          "url": "https://github.com/labike/PyPDF2/commit/d5d19646dace2f2af5ecf64d76e0df6c7b4ae6b9"
        },
        "date": 1752595899811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.395371307871349,
            "unit": "iter/sec",
            "range": "stddev: 0.0100671842679464",
            "extra": "mean: 294.518598800002 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.004835819445248,
            "unit": "iter/sec",
            "range": "stddev: 0.008286251316487738",
            "extra": "mean: 66.64518106249906 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26515630412948016,
            "unit": "iter/sec",
            "range": "stddev: 0.022766294249134233",
            "extra": "mean: 3.7713604558000013 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.61180136226915,
            "unit": "iter/sec",
            "range": "stddev: 0.001932344516138094",
            "extra": "mean: 56.78010894117633 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08280366170420606,
            "unit": "iter/sec",
            "range": "stddev: 0.1595788373697762",
            "extra": "mean: 12.076760609600004 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3256894827216148,
            "unit": "iter/sec",
            "range": "stddev: 0.002361700252796267",
            "extra": "mean: 754.324457599995 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "Stefan",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5252c2f6b3bf76ab3fe0d6a5c6c289a0098d0da3",
          "message": "DOC: Document how to read and modify XMP metadata (#3383)\n\nCloses #3325.",
          "timestamp": "2025-07-16T14:12:07+02:00",
          "tree_id": "dd75c80078318891c48b6978a55b576acec37c6c",
          "url": "https://github.com/labike/PyPDF2/commit/5252c2f6b3bf76ab3fe0d6a5c6c289a0098d0da3"
        },
        "date": 1752682295516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.4421261357759727,
            "unit": "iter/sec",
            "range": "stddev: 0.009865202542346487",
            "extra": "mean: 290.5181160000012 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.331329770639401,
            "unit": "iter/sec",
            "range": "stddev: 0.00750766140500457",
            "extra": "mean: 65.22591418750068 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.272679793042487,
            "unit": "iter/sec",
            "range": "stddev: 0.018396780340655425",
            "extra": "mean: 3.6673051158000076 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.687780427272816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005130333641379364",
            "extra": "mean: 56.53620611764823 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08290721709525671,
            "unit": "iter/sec",
            "range": "stddev: 0.0878175443768323",
            "extra": "mean: 12.061676112599997 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3575583060567735,
            "unit": "iter/sec",
            "range": "stddev: 0.024406720220812368",
            "extra": "mean: 736.6166120000003 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "Stefan",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfe7178e23244bf5aa875d226b074a75df8ebccc",
          "message": "ROB: Deal with DecodeParms being empty list (#3388)",
          "timestamp": "2025-07-17T13:29:37+02:00",
          "tree_id": "910c758dce9c3086ca20274f3a7654993c41c37f",
          "url": "https://github.com/labike/PyPDF2/commit/bfe7178e23244bf5aa875d226b074a75df8ebccc"
        },
        "date": 1752768711090,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.230978295246112,
            "unit": "iter/sec",
            "range": "stddev: 0.014198060125670604",
            "extra": "mean: 309.50378140000083 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 14.832254043510336,
            "unit": "iter/sec",
            "range": "stddev: 0.008729205894224918",
            "extra": "mean: 67.42063593749847 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.25061675623353474,
            "unit": "iter/sec",
            "range": "stddev: 0.039246080011930785",
            "extra": "mean: 3.9901561852000027 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.738890567961807,
            "unit": "iter/sec",
            "range": "stddev: 0.0007416185873268327",
            "extra": "mean: 56.37331129411775 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08283941400258213,
            "unit": "iter/sec",
            "range": "stddev: 0.11542002077318571",
            "extra": "mean: 12.071548453599993 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.368138023671965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006514967682084639",
            "extra": "mean: 730.9204062000163 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "larsga@garshol.priv.no",
            "name": "Lars Marius Garshol",
            "username": "larsga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c17f03a63a2372d5c826a1fa1ae58ee1dc79f128",
          "message": "ENH: Automatically preserve links in added pages (#3298)\n\nRelated to #3290.",
          "timestamp": "2025-07-22T09:52:32+02:00",
          "tree_id": "ce51a6ff8a1dd9a136697358333e18ee17ab2f57",
          "url": "https://github.com/labike/PyPDF2/commit/c17f03a63a2372d5c826a1fa1ae58ee1dc79f128"
        },
        "date": 1753179094632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.3581031611910364,
            "unit": "iter/sec",
            "range": "stddev: 0.009365964946040181",
            "extra": "mean: 297.78715900000066 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 14.93398716121198,
            "unit": "iter/sec",
            "range": "stddev: 0.008393442709130502",
            "extra": "mean: 66.96135393750025 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26160267969343864,
            "unit": "iter/sec",
            "range": "stddev: 0.015211553947408703",
            "extra": "mean: 3.8225908128000015 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.81545247142826,
            "unit": "iter/sec",
            "range": "stddev: 0.0006968244614759793",
            "extra": "mean: 56.131046999999676 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08243724228076814,
            "unit": "iter/sec",
            "range": "stddev: 0.1166589452845532",
            "extra": "mean: 12.1304397422 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3301651495272933,
            "unit": "iter/sec",
            "range": "stddev: 0.003157119025175904",
            "extra": "mean: 751.7863480000017 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "Stefan",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b642665b759499e060fbdb54a3e63004f5b20d6",
          "message": "BUG: Fix XMP handling dropping indirect references (#3392)\n\nCloses #3391.\n\nAccording to table 29 of the PDF 2.0 specification, the Metadata stream\ninside the catalog dictionary should be an indirect reference. The old\ncode would inline the content stream into the catalog dictionary, making\nthe file unreadable in some applications like some versions of Adobe\nAcrobat.",
          "timestamp": "2025-07-22T14:10:39+02:00",
          "tree_id": "3712793d37e82a88bf52e0cbc9c4fb11a39146e0",
          "url": "https://github.com/labike/PyPDF2/commit/0b642665b759499e060fbdb54a3e63004f5b20d6"
        },
        "date": 1753200704962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.369344462410182,
            "unit": "iter/sec",
            "range": "stddev: 0.01038934247179008",
            "extra": "mean: 296.79363779999903 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 14.926062629311037,
            "unit": "iter/sec",
            "range": "stddev: 0.009121957099014895",
            "extra": "mean: 66.99690499999988 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2618787052940746,
            "unit": "iter/sec",
            "range": "stddev: 0.01616346997789028",
            "extra": "mean: 3.8185617226000033 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 16.05274917325437,
            "unit": "iter/sec",
            "range": "stddev: 0.0031814083481327506",
            "extra": "mean: 62.29462562500565 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.07528628594599156,
            "unit": "iter/sec",
            "range": "stddev: 1.4933875074796559",
            "extra": "mean: 13.282631589999994 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.326833020208807,
            "unit": "iter/sec",
            "range": "stddev: 0.001462749162018461",
            "extra": "mean: 753.6743394000155 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "35156490+cybercoded@users.noreply.github.com",
            "name": "Tomiwa Kunle Oluwadare",
            "username": "cybercoded"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47a7f8fae02aa06585f8c8338dcab647e2547917",
          "message": "DOC: Add note about scanned PDFs and OCR suggestion in extract_text.md (#3387)",
          "timestamp": "2025-07-23T14:03:56+02:00",
          "tree_id": "de31110a3461248371c5a4ee90d5bd35a9a6ab5f",
          "url": "https://github.com/labike/PyPDF2/commit/47a7f8fae02aa06585f8c8338dcab647e2547917"
        },
        "date": 1753287102093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.211546095025291,
            "unit": "iter/sec",
            "range": "stddev: 0.01088302859548747",
            "extra": "mean: 311.37650540000266 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 14.8545115851959,
            "unit": "iter/sec",
            "range": "stddev: 0.0067945531099608825",
            "extra": "mean: 67.31961493749861 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2730193754273361,
            "unit": "iter/sec",
            "range": "stddev: 0.03177297262854271",
            "extra": "mean: 3.6627437098 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 18.087573239337036,
            "unit": "iter/sec",
            "range": "stddev: 0.00038957041935831446",
            "extra": "mean: 55.28657641176484 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.0826019660855835,
            "unit": "iter/sec",
            "range": "stddev: 0.19587650140122886",
            "extra": "mean: 12.106249371400008 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3313310104285851,
            "unit": "iter/sec",
            "range": "stddev: 0.005312849689686338",
            "extra": "mean: 751.1280005999993 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "stefan6419846",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "stefan6419846",
            "username": "stefan6419846"
          },
          "distinct": true,
          "id": "2a91bd4d0b5bda90f2eae741e383813b6cda9721",
          "message": "REL: 5.9.0\n\n## What's new\n\n### New Features (ENH)\n- Automatically preserve links in added pages (#3298) by @larsga\n- Allow writing/updating all properties of an embedded file (#3374) by @Arya-A-Nair\n\n### Bug Fixes (BUG)\n- Fix XMP handling dropping indirect references (#3392) by @stefan6419846\n\n### Robustness (ROB)\n- Deal with DecodeParms being empty list (#3388) by @stefan6419846\n\n### Documentation (DOC)\n- Document how to read and modify XMP metadata (#3383) by @stefan6419846\n\n[Full Changelog](https://github.com/py-pdf/pypdf/compare/5.8.0...5.9.0)",
          "timestamp": "2025-07-27T16:02:53+02:00",
          "tree_id": "79a552e976805669e6018b906b40ff07c893f754",
          "url": "https://github.com/labike/PyPDF2/commit/2a91bd4d0b5bda90f2eae741e383813b6cda9721"
        },
        "date": 1753632693350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.427216744970917,
            "unit": "iter/sec",
            "range": "stddev: 0.010993826818398382",
            "extra": "mean: 291.781954399994 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.38537264082304,
            "unit": "iter/sec",
            "range": "stddev: 0.006778274525018941",
            "extra": "mean: 64.99680074999503 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.27068743236403864,
            "unit": "iter/sec",
            "range": "stddev: 0.013577647077322473",
            "extra": "mean: 3.6942978521999974 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.984037979348557,
            "unit": "iter/sec",
            "range": "stddev: 0.0007065280547014716",
            "extra": "mean: 55.60486477777241 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08310262737186076,
            "unit": "iter/sec",
            "range": "stddev: 0.09279867240264303",
            "extra": "mean: 12.03331388700002 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3781271247963958,
            "unit": "iter/sec",
            "range": "stddev: 0.0015508474250614638",
            "extra": "mean: 725.6224640000028 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "Stefan",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01c98a58c326792e105198b2d6982795306911bd",
          "message": "DEV: Update code style related libraries (#3414)\n\nAdditionally includes the related changes required for getting a clean CI with these library changes.",
          "timestamp": "2025-07-30T17:13:53+02:00",
          "tree_id": "98b70dd6303e376f05220fe1e7dc951e9d9442c5",
          "url": "https://github.com/labike/PyPDF2/commit/01c98a58c326792e105198b2d6982795306911bd"
        },
        "date": 1753891903744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.500493648015432,
            "unit": "iter/sec",
            "range": "stddev: 0.009752364962268216",
            "extra": "mean: 285.6739935999997 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.492747132401398,
            "unit": "iter/sec",
            "range": "stddev: 0.007275338925415892",
            "extra": "mean: 64.54633199999816 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.27520940858519644,
            "unit": "iter/sec",
            "range": "stddev: 0.016013791624466724",
            "extra": "mean: 3.6335967041999964 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.947177512426016,
            "unit": "iter/sec",
            "range": "stddev: 0.0008092014629306284",
            "extra": "mean: 55.71906776470194 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08031295150230675,
            "unit": "iter/sec",
            "range": "stddev: 0.09418445109663794",
            "extra": "mean: 12.45129186879999 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3362239066935675,
            "unit": "iter/sec",
            "range": "stddev: 0.0035889658673897186",
            "extra": "mean: 748.3775698000045 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120829237+j-t-1@users.noreply.github.com",
            "name": "j-t-1",
            "username": "j-t-1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eba50d6af422d6fd287a3935668aab2ddf90acc4",
          "message": "STY: Tweak _page.py (#3370)\n\nUse modern formatting.",
          "timestamp": "2025-07-31T22:11:25+02:00",
          "tree_id": "6b9aa582ee0c8b6ed9afcea6b567267c3c1da59d",
          "url": "https://github.com/labike/PyPDF2/commit/eba50d6af422d6fd287a3935668aab2ddf90acc4"
        },
        "date": 1753999894903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.5361030359660095,
            "unit": "iter/sec",
            "range": "stddev: 0.008700176038986476",
            "extra": "mean: 282.7971894000015 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.664799287751565,
            "unit": "iter/sec",
            "range": "stddev: 0.0067224584995319225",
            "extra": "mean: 63.83739629411711 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.27632561771345204,
            "unit": "iter/sec",
            "range": "stddev: 0.031856343343127",
            "extra": "mean: 3.618918898199999 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 18.11042793591059,
            "unit": "iter/sec",
            "range": "stddev: 0.0005208761100031828",
            "extra": "mean: 55.21680677777536 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08303245463349217,
            "unit": "iter/sec",
            "range": "stddev: 0.03349911386006333",
            "extra": "mean: 12.043483532 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3236338626325814,
            "unit": "iter/sec",
            "range": "stddev: 0.03485256064483887",
            "extra": "mean: 755.4959330000031 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120829237+j-t-1@users.noreply.github.com",
            "name": "j-t-1",
            "username": "j-t-1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad85a228321e4dcac8a4b14fc7f84d1d2f8f4832",
          "message": "MAINT: Remove erroneous comment (#3406)",
          "timestamp": "2025-08-04T12:07:43+02:00",
          "tree_id": "a8dced92e30d24ccc5168e9f47cf74c4bb42ffcf",
          "url": "https://github.com/labike/PyPDF2/commit/ad85a228321e4dcac8a4b14fc7f84d1d2f8f4832"
        },
        "date": 1754302293411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.444297444355387,
            "unit": "iter/sec",
            "range": "stddev: 0.009066523975680505",
            "extra": "mean: 290.3349713999958 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 15.34525093538857,
            "unit": "iter/sec",
            "range": "stddev: 0.007856099999817394",
            "extra": "mean: 65.16674143749856 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2725928361159673,
            "unit": "iter/sec",
            "range": "stddev: 0.02161158944149011",
            "extra": "mean: 3.668474983599998 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.721985113818512,
            "unit": "iter/sec",
            "range": "stddev: 0.0005215493057874218",
            "extra": "mean: 56.42708723529294 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.08289265239916739,
            "unit": "iter/sec",
            "range": "stddev: 0.10470269641833325",
            "extra": "mean: 12.063795415600001 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_large_compressed_image_performance",
            "value": 1.3419031368508543,
            "unit": "iter/sec",
            "range": "stddev: 0.0034840309314563295",
            "extra": "mean: 745.2102708000041 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}