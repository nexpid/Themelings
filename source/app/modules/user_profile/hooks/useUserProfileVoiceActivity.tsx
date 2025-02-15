// app/modules/user_profile/hooks/useUserProfileVoiceActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useUserProfileVoiceActivity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUserProfileVoiceActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            options = mike.userId;
            var _closure2_slot0 = options;
            report = mike.guildId;
            tango = mike.surface;
            oscar = undefined;
            var _closure2_slot1 = oscar;
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 2;
            mike = verify[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = {};
            mike['userId'] = options;
            mike['guildId'] = report;
            mike['surface'] = tango;
            mike = zulu.bind(oscar)(mike);
            tango = mike.voiceState;
            zulu = mike.voiceChannel;
            mike = null;
            report = mike == zulu;
            mike = undefined;
            if(report) { _fun00002_ip = 102; continue _fun00001 }
 97:
            mike = zulu.id;
 102:
            _closure2_slot1 = mike;
            report = _closure1_slot0;
            options = _closure1_slot2;
            mike = 3;
            mike = options[mike];
            oscar = report.bind(oscar)(mike);
            report = oscar.useStateFromStores;
            options = _closure1_slot3;
            mike = new Array(2);
            mike[0] = options;
            golf = _closure1_slot4;
            mike[1] = golf;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    if(!(entity != zulu)) { _fun00004_ip = 21; continue _fun00003 }
 13:
                    zulu = _closure2_slot1;
                    if(!(entity == zulu)) { _fun00004_ip = 25; continue _fun00003 }
 21:
                    zulu = undefined;
                    return zulu;
 25:
                    report = _closure1_slot3;
                    tango = report.findActivity;
                    zulu = _closure2_slot0;
                    mike = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zulu = argFoo;
                            report = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 4;
                            tango = tango[mike];
                            mike = undefined;
                            tango = report.bind(mike)(tango);
                            tango = tango.bind(mike)(zulu);
                            if(tango) { _fun00006_ip = 40; continue _fun00005 }
 36:
                            tango = false;
                            return tango;
 40:
                            oscar = _closure1_slot4;
                            report = oscar.getVoiceStateForSession;
                            tango = _closure2_slot0;
                            zulu = zulu.session_id;
                            zulu = report.bind(oscar)(tango, zulu);
                            tango = null;
                            tango = tango == zulu;
                            mike = undefined;
                            if(tango) { _fun00006_ip = 85; continue _fun00005 }
 80:
                            mike = zulu.channelId;
 85:
                            entity = _closure2_slot1;
                            entity = mike === entity;
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(zulu, mike);
                    zulu = entity != mike;
                    entity = undefined;
                    if(!zulu) { _fun00004_ip = 69; continue _fun00003 }
 66:
                    entity = mike;
 69:
                    return entity;
                }
            };
            mike = report.bind(oscar)(mike, entity);
            entity = {};
            entity['voiceState'] = tango;
            entity['voiceChannel'] = zulu;
            entity['voiceActivity'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();