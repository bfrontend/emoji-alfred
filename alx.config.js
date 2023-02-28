module.exports = {
  outputName: 'emoji',
  "bundleid": "com.webxmsj.emoji-alfred",
  "category": "Tools",
  "connections": {
    "9C9296D0-C532-44C7-B47C-F601D4D4AFCB": [
      {
        "destinationuid": "50C03D72-75E5-4E61-8711-1224AF1CF813",
        "modifiers": 0,
        "modifiersubtext": "",
        "vitoclose": false
      }
    ]
  },
  "createdby": "webxmsj",
  "description": "An alfred tool that use emoji for git commit message",
  "disabled": false,
  "name": "emoji-alfred",
  "objects": [
    {
      "config": {
        "alfredfiltersresults": false,
        "alfredfiltersresultsmatchmode": 0,
        "argumenttreatemptyqueryasnil": true,
        "argumenttrimmode": 0,
        "argumenttype": 1,
        "escaping": 102,
        "keyword": "gm",
        "queuedelaycustom": 3,
        "queuedelayimmediatelyinitially": true,
        "queuedelaymode": 0,
        "queuemode": 1,
        "runningsubtext": "",
        "script": "./index $1",
        "scriptargtype": 1,
        "scriptfile": "",
        "subtext": "",
        "title": "",
        "type": 5,
        "withspace": false
      },
      "type": "alfred.workflow.input.scriptfilter",
      "uid": "9C9296D0-C532-44C7-B47C-F601D4D4AFCB",
      "version": 3
    },
    {
      "config": {
        "autopaste": true,
        "clipboardtext": "{query}",
        "ignoredynamicplaceholders": false,
        "transient": false
      },
      "type": "alfred.workflow.output.clipboard",
      "uid": "50C03D72-75E5-4E61-8711-1224AF1CF813",
      "version": 3
    }
  ],
  "uidata": {
    "50C03D72-75E5-4E61-8711-1224AF1CF813": {
      "xpos": 210,
      "ypos": 210
    },
    "9C9296D0-C532-44C7-B47C-F601D4D4AFCB": {
      "xpos": 50,
      "ypos": 210
    }
  },
  "userconfigurationconfig": [],
  "version": "1.0",
  "webaddress": "https://www.webxmsj.com"
}
