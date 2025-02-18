// app/modules/messages/native/renderer/MessageConnected.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ThreadStarterMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.row;
            var _closure2_slot0 = yankee;
            verify = michal.starterMessage;
            var _closure2_slot1 = verify;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            zuuluu = yankee.message;
            var _closure2_slot2 = zuuluu;
            backup = yankee.isFirst;
            foxtra = yankee.isEditing;
            michal = yankee.isSystemDM;
            option = tangon !== michal;
            if(!option) { _fun00002_ip = 68; continue _fun00001 }
 65:
            option = michal;
 68:
            michal = yankee.canShowImages;
            romeon = tangon === michal;
            if(romeon) { _fun00002_ip = 84; continue _fun00001 }
 81:
            romeon = michal;
 84:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 5;
            michal = offset[michal];
            golfie = oscard.bind(tangon)(michal);
            michal = {};
            michal['message'] = verify;
            michal['isFirst'] = backup;
            michal['isEditing'] = foxtra;
            michal['canShowImages'] = romeon;
            michal['isSystemDM'] = option;
            option = false;
            michal['canShowReactions'] = option;
            michal = golfie.bind(tangon)(michal);
            _closure2_slot3 = michal;
            option = _closure1_slot3;
            golfie = option.useMemo;
            romeon = zuuluu.id;
            zuuluu = new Array(2);
            zuuluu[0] = romeon;
            zuuluu[1] = michal;
            michal = function() {
                entity = {};
                verify = _closure2_slot3;
                offset = entity;
                zuuluu = copyDataProperties(offset, verify);
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 6;
                tangon = option[zuuluu];
                oscard = undefined;
                tangon = golfie.bind(oscard)(tangon);
                report = tangon.intl;
                tangon = report.string;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.uBid4u;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = 'threadStarterMessageHeader';
                entity[zuuluu] = tangon;
                michal = _closure2_slot2;
                zuuluu = michal.id;
                michal = 'id';
                entity[michal] = zuuluu;
                return entity;
            };
            option = golfie.bind(option)(michal, zuuluu);
            golfie = _closure1_slot3;
            zuuluu = golfie.useMemo;
            michal = new Array(2);
            michal[0] = yankee;
            michal[1] = verify;
            entity = function() {
                entity = {};
                tangon = _closure2_slot0;
                report = entity;
                zuuluu = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot1;
                michal = 'message';
                entity[michal] = zuuluu;
                return entity;
            };
            verify = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot0;
            entity = 7;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.RenderMessageOptionsOverride;
            entity = {'renderThreadEmbeds': false, 'renderReactions': false};
            golfie = _closure1_slot6;
            report = 8;
            report = offset[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['row'] = verify;
            report['messageContent'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: UserMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.row;
            option = entity.isMentioningReply;
            backup = oscard.message;
            foxtra = oscard.isFirst;
            romeon = oscard.isEditing;
            entity = oscard.isSystemDM;
            tangon = undefined;
            offset = tangon !== entity;
            if(!offset) { _fun00004_ip = 50; continue _fun00003 }
 47:
            offset = entity;
 50:
            entity = oscard.canShowImages;
            yankee = tangon === entity;
            if(yankee) { _fun00004_ip = 66; continue _fun00003 }
 63:
            yankee = entity;
 66:
            verify = oscard.renderContentOnly;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            report = michal.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['message'] = backup;
            zuuluu['isFirst'] = foxtra;
            zuuluu['isEditing'] = romeon;
            zuuluu['canShowImages'] = yankee;
            zuuluu['isSystemDM'] = offset;
            zuuluu['renderContentOnly'] = verify;
            zuuluu['isMentioningReply'] = option;
            report = report.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot6;
            entity = 8;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = oscard;
            entity['messageContent'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(golfie);
    var _closure1_slot3 = option;
    tangon = 1;
    golfie = oscard[tangon];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReferencedMessageState;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) { // Original name: MessageConnected
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.row;
            option = entity.isMentioningReply;
            zuuluu = golfie.message;
            entity = function(argFoo) { // Original name: useReferencedThreadStarterMessage
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    golfie = tangon.type;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    zuuluu = oscard.bind(report)(zuuluu);
                    zuuluu = zuuluu.MessageTypes;
                    oscard = zuuluu.THREAD_STARTER_MESSAGE;
                    zuuluu = undefined;
                    if(!(golfie === oscard)) { _fun00008_ip = 59; continue _fun00007 }
 53:
                    zuuluu = tangon.messageReference;
 59:
                    var _closure3_slot0 = zuuluu;
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.useStateFromStores;
                    oscard = _closure1_slot4;
                    zuuluu = new Array(1);
                    zuuluu[0] = oscard;
                    michal = function() {
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.getMessageByReference;
                        entity = _closure3_slot0;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
                    tangon = michal.state;
                    entity = _closure1_slot5;
                    zuuluu = entity.LOADED;
                    entity = null;
                    if(!(tangon === zuuluu)) { _fun00008_ip = 137; continue _fun00007 }
 132:
                    entity = michal.message;
 137:
                    return entity;
                }
            };
            report = undefined;
            oscard = entity.bind(report)(zuuluu);
            entity = null;
            if(!(entity == oscard)) { _fun00006_ip = 134; continue _fun00005 }
 40:
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 9;
            entity = verify[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.bind(report)(zuuluu);
            tangon = _closure1_slot6;
            if(entity) { _fun00006_ip = 99; continue _fun00005 }
 75:
            zuuluu = _closure1_slot8;
            entity = {};
            entity['row'] = golfie;
            entity['isMentioningReply'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 132; continue _fun00005;
 99:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 10;
            michal = option[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['row'] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 132:
            _fun00006_ip = 163; continue _fun00005;
 134:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot7;
            michal = {};
            michal['row'] = golfie;
            michal['starterMessage'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 163:
            return entity;
        }
    };
    michal = function(argFoo, argBar) {
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 11;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        entity = argFoo;
        michal = entity.row;
        entity = argBar;
        entity = entity.row;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = golfie.bind(option)(tangon, michal);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/MessageConnected.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();