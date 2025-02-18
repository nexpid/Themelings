// app/modules/share/native/ShareScreenModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'ShareScreenModal';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot10 = tangon;
    tangon = function() { // Original name: onClose
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 8;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.popWithKey;
        michal = _closure1_slot8;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot11 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/share/native/ShareScreenModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ShareScreenModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.text;
            var _closure2_slot0 = offset;
            option = michal.channelId;
            var _closure2_slot1 = option;
            sizing = michal.shareId;
            var _closure2_slot2 = sizing;
            michal = michal.attachmentManifest;
            var _closure2_slot3 = michal;
            tangon = undefined;
            var _closure2_slot8 = tangon;
            foxtra = _closure1_slot5;
            oscard = foxtra.useState;
            zuuluu = null;
            oscard = oscard.bind(foxtra)(zuuluu);
            backup = _closure1_slot4;
            romeon = 2;
            oscard = backup.bind(tangon)(oscard, romeon);
            golfie = 0;
            verify = oscard[golfie];
            var _closure2_slot4 = verify;
            yankee = 1;
            oscard = oscard[yankee];
            var _closure2_slot5 = oscard;
            kiloes = foxtra.useEffect;
            oscard = new Array(2);
            oscard[0] = sizing;
            oscard[1] = michal;
            michal = function() {
                michal = function() { // Original name: _fetchAttachments
                    tangon = undefined;
                    entity = undefined;
                    zuuluu = _closure1_slot3;
                    michal = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00004_ip = 116; continue _fun00003 }
 7:
                                zuuluu = _closure2_slot2;
                                michal = undefined;
                                if(!(michal !== zuuluu)) { _fun00004_ip = 113; continue _fun00003 }
 20:
                                zuuluu = _closure2_slot3;
                                if(!(michal !== zuuluu)) { _fun00004_ip = 113; continue _fun00003 }
 28: // try_start_0
                                zuuluu = _closure1_slot6;
                                golfie = zuuluu.ShareManager;
                                oscard = golfie.sharedAttachments;
                                report = _closure2_slot2;
                                zuuluu = _closure2_slot3;
                                zuuluu = oscard.bind(golfie)(report, zuuluu);
                                SaveGenerator(address=67);
 65:
                                return zuuluu;
 67:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(report) { _fun00004_ip = 84; continue _fun00003 }
 73:
                                tangon = _closure2_slot5;
                                tangon = tangon.bind(michal)(zuuluu);
 82: // try_end0
                                _fun00004_ip = 113; continue _fun00003;
 84:
                                return zuuluu;
 87: // catch_target0
                                CatchBlockStart(arg_register=5);
                                report = _closure1_slot10;
                                tangon = report.error;
                                zuuluu = 'Error fetching attachments:';
                                zuuluu = tangon.bind(report)(zuuluu, oscard);
 113:
                                return michal;
 116:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    _closure3_slot0 = tangon;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                var _closure3_slot0 = michal;
                michal = function() { // Original name: fetchAttachments
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                entity = undefined;
                michal = michal.bind(entity)();
                michal = !michal;
                return entity;
            };
            michal = kiloes.bind(foxtra)(michal, oscard);
            oscard = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 9;
            michal = kiloes[michal];
            sizing = oscard.bind(tangon)(michal);
            kiloes = sizing.useStateFromStores;
            michal = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = kiloes.bind(sizing)(oscard, michal);
            var _closure2_slot6 = michal;
            oscard = foxtra.useState;
            oscard = oscard.bind(foxtra)(zuuluu);
            oscard = backup.bind(tangon)(oscard, romeon);
            golfie = oscard[golfie];
            oscard = oscard[yankee];
            var _closure2_slot7 = oscard;
            romeon = foxtra.useEffect;
            yankee = new Array(2);
            yankee[0] = option;
            yankee[1] = michal;
            oscard = function() {
                michal = function() { // Original name: _fetchChannel
                    tangon = undefined;
                    entity = undefined;
                    zuuluu = _closure1_slot3;
                    michal = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00006_ip = 123; continue _fun00005 }
 7:
                                michal = _closure2_slot1;
                                tangon = null;
                                if(!(tangon != michal)) { _fun00006_ip = 118; continue _fun00005 }
 20:
                                michal = _closure2_slot6;
                                if(!(tangon == michal)) { _fun00006_ip = 118; continue _fun00005 }
 28: // try_start_0
                                report = _closure1_slot1;
                                tangon = _closure1_slot2;
                                michal = 10;
                                michal = tangon[michal];
                                tangon = undefined;
                                oscard = report.bind(tangon)(michal);
                                report = oscard.fetchChannel;
                                michal = _closure2_slot1;
                                michal = report.bind(oscard)(michal);
                                SaveGenerator(address=72);
 70:
                                return michal;
 72:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00006_ip = 89; continue _fun00005 }
 78:
                                zuuluu = _closure2_slot7;
                                zuuluu = zuuluu.bind(tangon)(michal);
 87: // try_end0
                                _fun00006_ip = 118; continue _fun00005;
 89:
                                return michal;
 92: // catch_target0
                                CatchBlockStart(arg_register=4);
                                tangon = _closure1_slot10;
                                zuuluu = tangon.error;
                                michal = 'Error fetching channel:';
                                michal = zuuluu.bind(tangon)(michal, report);
 118:
                                michal = undefined;
                                return michal;
 123:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    _closure3_slot0 = tangon;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                var _closure3_slot0 = michal;
                michal = function() { // Original name: fetchChannel
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                entity = undefined;
                michal = michal.bind(entity)();
                michal = !michal;
                return entity;
            };
            oscard = romeon.bind(foxtra)(oscard, yankee);
            if(!(zuuluu != michal)) { _fun00002_ip = 251; continue _fun00001 }
 248:
            golfie = michal;
 251:
            _closure2_slot8 = golfie;
            oscard = _closure1_slot5;
            zuuluu = oscard.useMemo;
            michal = new Array(4);
            michal[0] = offset;
            michal[1] = verify;
            michal[2] = option;
            michal[3] = golfie;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    zuuluu = _closure2_slot0;
                    entity['text'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    report = null;
                    if(!(report == zuuluu)) { _fun00008_ip = 29; continue _fun00007 }
 23:
                    zuuluu = new Array(0);
                    _fun00008_ip = 33; continue _fun00007;
 29:
                    zuuluu = _closure2_slot4;
 33:
                    entity['attachments'] = zuuluu;
                    zuuluu = _closure2_slot8;
                    if(!(report != zuuluu)) { _fun00008_ip = 253; continue _fun00007 }
 49:
                    zuuluu = _closure2_slot8;
                    oscard = zuuluu.type;
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = golfie.bind(zuuluu)(tangon);
                    tangon = tangon.ChannelTypes;
                    tangon = tangon.DM;
                    if(!(oscard === tangon)) { _fun00008_ip = 241; continue _fun00007 }
 102:
                    tangon = _closure2_slot8;
                    if(!tangon) { _fun00008_ip = 147; continue _fun00007 }
 109:
                    oscard = 'recipients';
                    oscard = oscard in tangon;
                    if(!oscard) { _fun00008_ip = 147; continue _fun00007 }
 120:
                    oscard = global;
                    golfie = oscard.Array;
                    oscard = golfie.isArray;
                    tangon = tangon.recipients;
                    tangon = oscard.bind(golfie)(tangon);
                    if(tangon) { _fun00008_ip = 217; continue _fun00007 }
 147:
                    oscard = _closure2_slot8;
                    tangon = oscard;
                    if(!tangon) { _fun00008_ip = 165; continue _fun00007 }
 157:
                    golfie = 'recipient';
                    tangon = golfie in oscard;
 165:
                    if(!tangon) { _fun00008_ip = 182; continue _fun00007 }
 168:
                    golfie = oscard.recipient;
                    oscard = 'id';
                    tangon = oscard in golfie;
 182:
                    if(!tangon) { _fun00008_ip = 239; continue _fun00007 }
 185:
                    tangon = _closure2_slot8;
                    tangon = tangon.recipient;
                    report = report == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00008_ip = 209; continue _fun00007 }
 204:
                    zuuluu = tangon.id;
 209:
                    entity['targetUserId'] = zuuluu;
                    _fun00008_ip = 239; continue _fun00007;
 217:
                    zuuluu = _closure2_slot8;
                    tangon = zuuluu.recipients;
                    zuuluu = 0;
                    zuuluu = tangon[zuuluu];
                    entity['targetUserId'] = zuuluu;
 239:
                    return entity;
 241:
                    michal = _closure2_slot1;
                    entity['targetChannelId'] = michal;
                    return entity;
 253:
                    return entity;
                }
            };
            oscard = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 12;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['sharedContent'] = oscard;
            report = _closure1_slot11;
            entity['onClose'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();