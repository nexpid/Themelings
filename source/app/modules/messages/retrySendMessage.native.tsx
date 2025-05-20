// app/modules/messages/retrySendMessage.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 4;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/retrySendMessage.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: retrySendMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            offset = argBaz;
            tangon = arguments[3];
            var _closure2_slot0 = oscard;
            entity = undefined;
            if(!(tangon === entity)) { _fun00002_ip = 26; continue _fun00001 }
 24:
            tangon = {};
 26:
            golfie = _closure1_slot1;
            zuuluu = _closure1_slot2;
            verify = 0;
            zuuluu = zuuluu[verify];
            foxtra = golfie.bind(entity)(zuuluu);
            romeon = foxtra.deleteMessage;
            option = oscard.id;
            golfie = report.id;
            zuuluu = true;
            zuuluu = romeon.bind(foxtra)(option, golfie, zuuluu);
            zuuluu = report.isCommandType;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00002_ip = 277; continue _fun00001 }
 89:
            output = report.content;
            zuuluu = report.tts;
            backup = report.messageReference;
            kiloes = report.flags;
            sizing = report.nonce;
            foxtra = null;
            golfie = foxtra == offset;
            romeon = undefined;
            if(golfie) { _fun00002_ip = 145; continue _fun00001 }
 128:
            option = offset.map;
            golfie = function(argFoo) {
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
                    michal = 2;
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
            romeon = option.bind(offset)(golfie);
 145:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[verify];
            offset = option.bind(entity)(golfie);
            verify = offset.sendMessage;
            option = oscard.id;
            golfie = {};
            golfie['content'] = output;
            golfie['tts'] = zuuluu;
            zuuluu = new Array(0);
            golfie['invalidEmojis'] = zuuluu;
            zuuluu = new Array(0);
            golfie['validNonShortcutEmojis'] = zuuluu;
            zuuluu = {};
            zuuluu['nonce'] = sizing;
            zuuluu['flags'] = kiloes;
            kiloes = foxtra != backup;
            foxtra = undefined;
            if(!kiloes) { _fun00002_ip = 225; continue _fun00001 }
 222:
            foxtra = backup;
 225:
            zuuluu['messageReference'] = foxtra;
            zuuluu['attachmentsToUpload'] = romeon;
            yankee = function(argFoo, argBar, argBaz) { // Original name: onAttachmentUploadError
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.handleUploadMessageAttachmentsErrors;
                michal = {};
                report = argFoo;
                michal['file'] = report;
                oscard = _closure2_slot0;
                report = oscard.getGuildId;
                report = report.bind(oscard)();
                michal['guildId'] = report;
                report = new Array(0);
                michal['analyticsLocations'] = report;
                report = argBar;
                michal['code'] = report;
                report = argBaz;
                michal['reason'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onAttachmentUploadError'] = yankee;
            source = zuuluu;
            update = tangon;
            yankee = copyDataProperties(source, update);
            ctrled = offset;
            source = option;
            update = golfie;
            echoed = undefined;
            result = zuuluu;
            zuuluu = ctrled[verify](source, update, echoed, result, output);
            _fun00002_ip = 337; continue _fun00001;
 277:
            zuuluu = report.interactionData;
            option = null;
            zuuluu = option != zuuluu;
            if(!zuuluu) { _fun00002_ip = 301; continue _fun00001 }
 292:
            golfie = tangon.applicationId;
            zuuluu = option != golfie;
 301:
            if(!zuuluu) { _fun00002_ip = 337; continue _fun00001 }
 304:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.retryCommandMessage;
            michal = michal.bind(zuuluu)(report, oscard, tangon);
 337:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();