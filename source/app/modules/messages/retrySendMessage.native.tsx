// app/modules/messages/retrySendMessage.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/retrySendMessage.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: retrySendMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            option = argBaz;
            tangon = arguments[3];
            entity = undefined;
            if(!(tangon === entity)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            tangon = {};
 22:
            golfie = _closure1_slot1;
            zuuluu = _closure1_slot2;
            foxtra = 1;
            zuuluu = zuuluu[foxtra];
            romeon = golfie.bind(entity)(zuuluu);
            yankee = romeon.deleteMessage;
            offset = oscard.id;
            golfie = report.id;
            zuuluu = true;
            zuuluu = yankee.bind(romeon)(offset, golfie, zuuluu);
            zuuluu = report.isCommandType;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00002_ip = 393; continue _fun00001 }
 86:
            kiloes = report.content;
            backup = report.tts;
            echoed = report.messageReference;
            romeon = report.flags;
            yankee = report.nonce;
            offset = null;
            if(!(offset == option)) { _fun00002_ip = 238; continue _fun00001 }
 120:
            golfie = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[foxtra];
            output = golfie.bind(entity)(zuuluu);
            sizing = output.sendMessage;
            foxtra = oscard.id;
            golfie = {};
            golfie['content'] = kiloes;
            golfie['tts'] = backup;
            zuuluu = new Array(0);
            golfie['invalidEmojis'] = zuuluu;
            zuuluu = new Array(0);
            golfie['validNonShortcutEmojis'] = zuuluu;
            zuuluu = {};
            zuuluu['nonce'] = yankee;
            zuuluu['flags'] = romeon;
            update = offset != echoed;
            result = undefined;
            if(!update) { _fun00002_ip = 200; continue _fun00001 }
 197:
            result = echoed;
 200:
            zuuluu['messageReference'] = result;
            sequen = zuuluu;
            vacuum = tangon;
            result = copyDataProperties(sequen, vacuum);
            config = output;
            sequen = foxtra;
            vacuum = golfie;
            ctrled = undefined;
            source = zuuluu;
            zuuluu = config[sizing](sequen, vacuum, ctrled, source, update);
            _fun00002_ip = 453; continue _fun00001;
 238:
            golfie = option.map;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = tangon.on;
                    michal = null;
                    entity = tangon;
                    if(!(michal == zuuluu)) { _fun00004_ip = 60; continue _fun00003 }
 18:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    zuuluu = michal.CloudUpload;
                    michal = zuuluu.fromJson;
                    entity = michal.bind(zuuluu)(tangon);
 60:
                    return entity;
                }
            };
            foxtra = golfie.bind(option)(zuuluu);
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            option = golfie.bind(entity)(zuuluu);
            golfie = option.uploadLocalFiles;
            zuuluu = {};
            zuuluu['channel'] = oscard;
            zuuluu['items'] = foxtra;
            sizing = _closure1_slot3;
            foxtra = sizing.getToken;
            foxtra = foxtra.bind(sizing)();
            zuuluu['token'] = foxtra;
            foxtra = {};
            foxtra['content'] = kiloes;
            foxtra['tts'] = backup;
            backup = new Array(0);
            foxtra['invalidEmojis'] = backup;
            backup = new Array(0);
            foxtra['validNonShortcutEmojis'] = backup;
            zuuluu['parsedMessage'] = foxtra;
            zuuluu['flags'] = romeon;
            zuuluu['nonce'] = yankee;
            yankee = offset == tangon;
            offset = undefined;
            if(yankee) { _fun00002_ip = 369; continue _fun00001 }
 363:
            offset = tangon.poll;
 369:
            zuuluu['poll'] = offset;
            verify = function() { // Original name: maxSizeCallback
                entity = undefined;
                return entity;
            };
            zuuluu['maxSizeCallback'] = verify;
            zuuluu = golfie.bind(option)(zuuluu);
            _fun00002_ip = 453; continue _fun00001;
 393:
            zuuluu = report.interactionData;
            option = null;
            zuuluu = option != zuuluu;
            if(!zuuluu) { _fun00002_ip = 417; continue _fun00001 }
 408:
            golfie = tangon.applicationId;
            zuuluu = option != golfie;
 417:
            if(!zuuluu) { _fun00002_ip = 453; continue _fun00001 }
 420:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.retryCommandMessage;
            michal = michal.bind(zuuluu)(report, oscard, tangon);
 453:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();