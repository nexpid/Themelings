// app/modules/messages/native/MessageSendFailureNotificationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: handleMessageSendFailure
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            oscard = entity.messageId;
            entity = entity.shouldNotify;
            if(!entity) { _fun00004_ip = 370; continue _fun00003 }
 25:
            michal = _closure1_slot11;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = 'active';
            if(!(entity === michal)) { _fun00004_ip = 192; continue _fun00003 }
 53:
            michal = _closure1_slot9;
            entity = michal.getGuildId;
            zuuluu = entity.bind(michal)();
            michal = _closure1_slot8;
            entity = michal.getChannelId;
            entity = entity.bind(michal)(zuuluu);
            if(!(golfie !== entity)) { _fun00004_ip = 188; continue _fun00003 }
 86:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.enqueueNotification;
            entity = {};
            tangon = _closure1_slot12;
            tangon = tangon.MESSAGE_FAILED_TO_SEND;
            entity['type'] = tangon;
            entity['channelId'] = golfie;
            entity['messageId'] = oscard;
            tangon = '-';
            tangon = golfie + tangon;
            tangon = tangon + oscard;
            entity['key'] = tangon;
            tangon = 5000;
            entity['duration'] = tangon;
            tangon = function() { // Original name: onDismiss
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clearNotification;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity['onDismiss'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            _fun00004_ip = 370; continue _fun00003;
 188:
            entity = undefined;
            return entity;
 192:
            michal = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 12;
            entity = romeon[entity];
            yankee = undefined;
            zuuluu = michal.bind(yankee)(entity);
            michal = zuuluu.presentLocalNotification;
            entity = {};
            tangon = 'local';
            entity['category'] = tangon;
            offset = _closure1_slot0;
            tangon = 13;
            option = romeon[tangon];
            option = offset.bind(yankee)(option);
            foxtra = option.intl;
            verify = foxtra.string;
            option = romeon[tangon];
            option = offset.bind(yankee)(option);
            option = option.t;
            option = option.LdlH2N;
            option = verify.bind(foxtra)(option);
            entity['alertTitle'] = option;
            option = romeon[tangon];
            option = offset.bind(yankee)(option);
            verify = option.intl;
            option = verify.string;
            tangon = romeon[tangon];
            tangon = offset.bind(yankee)(tangon);
            tangon = tangon.t;
            tangon = tangon.xxRPOT;
            tangon = option.bind(verify)(tangon);
            entity['alertBody'] = tangon;
            tangon = {};
            tangon['channelId'] = golfie;
            tangon['messageId'] = oscard;
            report = _closure1_slot14;
            report = report.MESSAGE_SEND_FAILED;
            tangon['type'] = report;
            entity['userInfo'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 370:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: handleMessageCreate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            report = michal.message;
            var _closure2_slot0 = report;
            zuuluu = michal.sendMessageOptions;
            oscard = null;
            michal = oscard != zuuluu;
            if(!michal) { _fun00006_ip = 35; continue _fun00005 }
 29:
            michal = zuuluu.isHydratingExpiredPendingMessage;
 35:
            if(!michal) { _fun00006_ip = 60; continue _fun00005 }
 38:
            tangon = report.state;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.SEND_FAILED;
            michal = tangon === zuuluu;
 60:
            if(!michal) { _fun00006_ip = 117; continue _fun00005 }
 63:
            tangon = _closure1_slot10;
            zuuluu = tangon.getCurrentUser;
            golfie = zuuluu.bind(tangon)();
            option = oscard == golfie;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 93; continue _fun00005 }
 88:
            zuuluu = golfie.id;
 93:
            report = report.author;
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00006_ip = 113; continue _fun00005 }
 108:
            tangon = report.id;
 113:
            michal = zuuluu === tangon;
 117:
            if(!michal) { _fun00006_ip = 149; continue _fun00005 }
 120:
            michal = global;
            tangon = michal.setTimeout;
            zuuluu = undefined;
            michal = function() {
                zuuluu = _closure1_slot16;
                michal = {};
                entity = _closure2_slot0;
                tangon = entity.channel_id;
                michal['channelId'] = tangon;
                entity = entity.id;
                michal['messageId'] = entity;
                entity = true;
                michal['shouldNotify'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = 3000;
            entity = tangon.bind(zuuluu)(michal, entity);
 149:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.InAppNotificationTypes;
    var _closure1_slot12 = option;
    tangon = tangon.MessageStates;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.LocalNotificationTypes;
    var _closure1_slot14 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: MessageSendFailureNotificationManager
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot4;
                michal = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot15;
                entity = entity.bind(tangon)();
                if(entity) { _fun00008_ip = 84; continue _fun00007 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00008_ip = 118; continue _fun00007;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = michal.bind(tangon)(report, entity);
                michal = {};
                tangon = _closure1_slot17;
                michal['MESSAGE_CREATE'] = tangon;
                zuuluu = _closure1_slot16;
                michal['MESSAGE_SEND_FAILED'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/MessageSendFailureNotificationManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();