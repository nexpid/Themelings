// app/modules/system_dm/UrgentSystemDMManagerBase.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: maybeShowUrgentMessageModal
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getCurrentUser;
            report = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 94; continue _fun00005 }
 22:
            zuuluu = _closure1_slot8;
            entity = zuuluu.getChannelId;
            entity = entity.bind(zuuluu)();
            oscard = _closure1_slot7;
            tangon = oscard.getDMFromUserId;
            zuuluu = _closure1_slot10;
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = report.hasUrgentMessages;
            tangon = tangon.bind(report)();
            if(!tangon) { _fun00006_ip = 98; continue _fun00005 }
 68:
            if(!(zuuluu !== entity)) { _fun00006_ip = 98; continue _fun00005 }
 72:
            zuuluu = _closure1_slot12;
            if(zuuluu) { _fun00006_ip = 94; continue _fun00005 }
 79:
            zuuluu = true;
            _closure1_slot12 = zuuluu;
            tangon = argFoo;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)();
 94:
            zuuluu = undefined;
            return zuuluu;
 98:
            zuuluu = _closure1_slot16;
            michal = {};
            michal['channelId'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: maybeClearUrgentMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = _closure1_slot9;
            michal = tangon.getCurrentUser;
            report = michal.bind(tangon)();
            oscard = _closure1_slot7;
            tangon = oscard.getDMFromUserId;
            michal = _closure1_slot10;
            michal = tangon.bind(oscard)(michal);
            zuuluu = zuuluu === michal;
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00008_ip = 66; continue _fun00007 }
 56:
            tangon = report.hasUrgentMessages;
            michal = tangon.bind(report)();
 66:
            if(!michal) { _fun00008_ip = 72; continue _fun00007 }
 69:
            michal = zuuluu;
 72:
            if(!michal) { _fun00008_ip = 125; continue _fun00007 }
 75:
            tangon = false;
            _closure1_slot12 = tangon;
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 10;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.setFlag;
            entity = _closure1_slot11;
            entity = entity.HAS_UNREAD_URGENT_MESSAGES;
            entity = michal.bind(zuuluu)(entity, tangon);
 125:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SYSTEM_USER;
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserFlags;
    var _closure1_slot11 = tangon;
    tangon = false;
    var _closure1_slot12 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: UrgentSystemDMManagerBase
            oscard = this;
            entity = _closure1_slot3;
            report = _closure2_slot0;
            michal = undefined;
            entity = entity.bind(michal)(oscard, report);
            entity = _closure1_slot13;
            entity = entity.bind(michal)(oscard, report);
            var _closure3_slot0 = entity;
            michal = argFoo;
            entity['handleShowUrgentMessageAlert'] = michal;
            michal = {};
            report = function() { // Original name: POST_CONNECTION_OPEN
                zuuluu = _closure1_slot15;
                entity = _closure3_slot0;
                michal = entity.handleShowUrgentMessageAlert;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['POST_CONNECTION_OPEN'] = report;
            tangon = function() { // Original name: MESSAGE_CREATE
                zuuluu = _closure1_slot15;
                entity = _closure3_slot0;
                michal = entity.handleShowUrgentMessageAlert;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['MESSAGE_CREATE'] = tangon;
            zuuluu = _closure1_slot16;
            michal['CHANNEL_SELECT'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/system_dm/UrgentSystemDMManagerBase.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();