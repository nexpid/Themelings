// app/stores/NotificationSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscard;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                oscard = argBaz;
                michal = _closure1_slot5;
                zuuluu = undefined;
                entity = argBar;
                verify = michal.bind(zuuluu)(entity);
                michal = _closure1_slot4;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, oscard);
                _fun00004_ip = 92; continue _fun00003;
 51:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                if(oscard) { _fun00004_ip = 71; continue _fun00003 }
 67:
                oscard = new Array(0);
 71:
                report = _closure1_slot5;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = golfie.bind(option)(verify, oscard, report);
 92:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure1_slot12 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
                _fun00006_ip = 76; continue _fun00005;
 74: // catch_target0
                CatchBlockStart(arg_register=1);
 76:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot13 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot13 = entity;
        verify = function(argFoo) { // Original name: handleSetDesktopType
            entity = argFoo;
            michal = entity.desktopType;
            entity = _closure1_slot11;
            entity['desktopType'] = michal;
            entity = undefined;
            return entity;
        };
        var _closure1_slot14 = verify;
        entity = global;
        offset = entity.Object;
        option = offset.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = option.bind(offset)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = golfie.bind(entity)(michal);
        var _closure1_slot2 = michal;
        michal = 1;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot3 = michal;
        michal = 2;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot4 = michal;
        michal = 3;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot5 = michal;
        michal = 4;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot6 = michal;
        michal = 5;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        yankee = michal.DesktopNotificationTypes;
        var _closure1_slot7 = yankee;
        option = michal.NotificationPermissionTypes;
        var _closure1_slot8 = option;
        option = michal.TTSNotificationTypes;
        var _closure1_slot9 = option;
        michal = {'desktopType': null, 'disableAllSounds': false, 'disabledSounds': null, 'ttsType': null, 'disableUnreadBadge': false, 'taskbarFlash': true, 'notifyMessagesInSelectedChannel': false};
        offset = 6;
        offset = oscard[offset];
        offset = report.bind(entity)(offset);
        offset = offset.isPlatformEmbedded;
        if(offset) { _fun00002_ip = 253; continue _fun00001 }
 245:
        offset = yankee.NEVER;
        _fun00002_ip = 259; continue _fun00001;
 253:
        offset = yankee.ALL;
 259:
        michal['desktopType'] = offset;
        offset = new Array(0);
        michal['disabledSounds'] = offset;
        option = option.NEVER;
        michal['ttsType'] = option;
        var _closure1_slot10 = michal;
        var _closure1_slot11 = michal;
        michal = 7;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        option = michal.DeviceSettingsStore;
        michal = function(argFoo) {
            tangon = function() { // Original name: NotificationSettingsStore
                report = this;
                tangon = undefined;
                entity = undefined;
                oscard = _closure1_slot2;
                zuuluu = _closure2_slot0;
                oscard = oscard.bind(tangon)(report, zuuluu);
                michal = _closure1_slot12;
                entity = arguments;
                entity = michal.bind(tangon)(report, zuuluu, entity);
                return entity;
            };
            var _closure2_slot0 = tangon;
            report = _closure1_slot6;
            zuuluu = undefined;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            michal = _closure1_slot3;
            report = {};
            entity = 'initialize';
            report['key'] = entity;
            entity = function(argFoo) { // Original name: value
                michal = {};
                tangon = _closure1_slot10;
                report = michal;
                zuuluu = copyDataProperties(report, tangon);
                tangon = argFoo;
                report = michal;
                zuuluu = copyDataProperties(report, tangon);
                _closure1_slot11 = michal;
                entity = undefined;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(10);
            entity[0] = report;
            report = {};
            golfie = 'getUserAgnosticState';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                return entity;
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'getDesktopType';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                entity = entity.desktopType;
                return entity;
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'getTTSType';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                entity = entity.ttsType;
                return entity;
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'getDisabledSounds';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                entity = entity.disabledSounds;
                return entity;
            };
            report['value'] = golfie;
            entity[4] = report;
            report = {};
            golfie = 'getDisableAllSounds';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                entity = entity.disableAllSounds;
                return entity;
            };
            report['value'] = golfie;
            entity[5] = report;
            report = {};
            golfie = 'getDisableUnreadBadge';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                entity = entity.disableUnreadBadge;
                return entity;
            };
            report['value'] = golfie;
            entity[6] = report;
            report = {};
            golfie = 'getNotifyMessagesInSelectedChannel';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot11;
                entity = entity.notifyMessagesInSelectedChannel;
                return entity;
            };
            report['value'] = golfie;
            entity[7] = report;
            report = {};
            golfie = 'taskbarFlash';
            report['key'] = golfie;
            golfie = function() { // Original name: get
                entity = _closure1_slot11;
                entity = entity.taskbarFlash;
                return entity;
            };
            report['get'] = golfie;
            entity[8] = report;
            report = {};
            golfie = 'isSoundDisabled';
            report['key'] = golfie;
            oscard = function(argFoo) { // Original name: value
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure1_slot11;
                    entity = entity.disableAllSounds;
                    if(entity) { _fun00008_ip = 49; continue _fun00007 }
 16:
                    michal = _closure1_slot11;
                    tangon = michal.disabledSounds;
                    zuuluu = tangon.indexOf;
                    michal = argFoo;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = -1;
                    entity = michal !== zuuluu;
 49:
                    return entity;
                }
            };
            report['value'] = oscard;
            entity[9] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        option = michal.bind(entity)(option);
        michal = 'NotificationSettingsStore';
        option['displayName'] = michal;
        michal = 'notifications';
        option['persistKey'] = michal;
        michal = new Array(1);
        offset = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = {};
                oscard = argFoo;
                golfie = entity;
                michal = copyDataProperties(golfie, oscard);
                michal = entity.disabledSounds;
                if(michal) { _fun00010_ip = 25; continue _fun00009 }
 21:
                michal = new Array(0);
 25:
                entity['disabledSounds'] = michal;
                michal = entity.disableUnreadBadge;
                if(michal) { _fun00010_ip = 42; continue _fun00009 }
 40:
                michal = false;
 42:
                entity['disableUnreadBadge'] = michal;
                michal = entity.taskbarFlash;
                zuuluu = null;
                michal = zuuluu == michal;
                if(michal) { _fun00010_ip = 69; continue _fun00009 }
 63:
                michal = entity.taskbarFlash;
 69:
                entity['taskbarFlash'] = michal;
                michal = entity.ttsType;
                if(michal) { _fun00010_ip = 97; continue _fun00009 }
 84:
                tangon = _closure1_slot9;
                michal = tangon.NEVER;
 97:
                entity['ttsType'] = michal;
                michal = entity.desktopType;
                if(!(zuuluu == michal)) { _fun00010_ip = 171; continue _fun00009 }
 113:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 6;
                tangon = tangon[michal];
                michal = undefined;
                michal = report.bind(michal)(tangon);
                michal = michal.isPlatformEmbedded;
                zuuluu = _closure1_slot7;
                if(michal) { _fun00010_ip = 159; continue _fun00009 }
 151:
                michal = zuuluu.NEVER;
                _fun00010_ip = 165; continue _fun00009;
 159:
                michal = zuuluu.ALL;
 165:
                entity['desktopType'] = michal;
 171:
                return entity;
            }
        };
        michal[0] = offset;
        option['migrations'] = michal;
        michal = 8;
        michal = oscard[michal];
        kiloes = golfie.bind(entity)(michal);
        michal = {};
        michal['NOTIFICATIONS_SET_DESKTOP_TYPE'] = verify;
        verify = function(argFoo) { // Original name: handleSetTTSType
            entity = argFoo;
            michal = entity.ttsType;
            entity = _closure1_slot11;
            entity['ttsType'] = michal;
            entity = undefined;
            return entity;
        };
        michal['NOTIFICATIONS_SET_TTS_TYPE'] = verify;
        verify = function(argFoo) { // Original name: handleSetDisabledSounds
            entity = argFoo;
            michal = entity.sounds;
            entity = _closure1_slot11;
            entity['disabledSounds'] = michal;
            entity = undefined;
            return entity;
        };
        michal['NOTIFICATIONS_SET_DISABLED_SOUNDS'] = verify;
        verify = function() { // Original name: handleToggleAllDisabled
            michal = _closure1_slot11;
            entity = michal.disableAllSounds;
            entity = !entity;
            michal['disableAllSounds'] = entity;
            entity = undefined;
            return entity;
        };
        michal['NOTIFICATIONS_TOGGLE_ALL_DISABLED'] = verify;
        verify = function(argFoo) { // Original name: handleSetHavePermission
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.enabled;
                michal = _closure1_slot8;
                michal = michal.BLOCKED;
                if(!(zuuluu !== michal)) { _fun00012_ip = 69; continue _fun00011 }
 25:
                michal = _closure1_slot8;
                michal = michal.ENABLED;
                if(!(zuuluu === michal)) { _fun00012_ip = 97; continue _fun00011 }
 39:
                tangon = _closure1_slot14;
                zuuluu = {};
                michal = _closure1_slot7;
                michal = michal.ALL;
                zuuluu['desktopType'] = michal;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                _fun00012_ip = 97; continue _fun00011;
 69:
                zuuluu = _closure1_slot14;
                michal = {};
                entity = _closure1_slot7;
                entity = entity.NEVER;
                michal['desktopType'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 97:
                entity = undefined;
                return entity;
            }
        };
        michal['NOTIFICATIONS_SET_PERMISSION_STATE'] = verify;
        verify = function(argFoo) { // Original name: handleSetDisableUnreadBadge
            entity = argFoo;
            michal = entity.disableUnreadBadge;
            entity = _closure1_slot11;
            entity['disableUnreadBadge'] = michal;
            entity = undefined;
            return entity;
        };
        michal['NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE'] = verify;
        verify = function(argFoo) { // Original name: handleSetTaskbarFlash
            entity = argFoo;
            michal = entity.taskbarFlash;
            entity = _closure1_slot11;
            entity['taskbarFlash'] = michal;
            entity = undefined;
            return entity;
        };
        michal['NOTIFICATIONS_SET_TASKBAR_FLASH'] = verify;
        tangon = function(argFoo) { // Original name: handleSetNotifyMessagesInSelectedChannel
            entity = argFoo;
            michal = entity.notify;
            entity = _closure1_slot11;
            entity['notifyMessagesInSelectedChannel'] = michal;
            entity = undefined;
            return entity;
        };
        michal['NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL'] = tangon;
        tangon = option.prototype;
        tangon = Object.create(tangon, {constructor: {value: option}});
        sizing = tangon;
        backup = michal;
        michal = new sizing[option](kiloes, backup, foxtra);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 9;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'stores/NotificationSettingsStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();