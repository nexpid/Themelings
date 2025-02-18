// app/actions/native/GuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    tangon = function(argFoo, argBar) { // Original name: batchChannelUpdate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argBar;
            michal = report.length;
            entity = 0;
            if(!(!(michal <= entity))) { _fun00002_ip = 155; continue _fun00001 }
 17:
            zuuluu = function() { // Original name: onEnd
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                entity['type'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 1;
            entity = golfie[entity];
            tangon = undefined;
            option = michal.bind(tangon)(entity);
            michal = option.dispatch;
            entity = {};
            verify = 'GUILD_SETTINGS_SUBMIT';
            entity['type'] = verify;
            entity = michal.bind(option)(entity);
            michal = _closure1_slot0;
            entity = 2;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            tangon = entity.HTTP;
            michal = tangon.patch;
            entity = {};
            option = _closure1_slot3;
            golfie = option.GUILD_CHANNELS;
            oscard = argFoo;
            oscard = golfie.bind(option)(oscard);
            entity['url'] = oscard;
            entity['body'] = report;
            report = true;
            entity['oldFormErrors'] = report;
            entity['rejectWithError'] = report;
            michal = michal.bind(tangon)(entity);
            entity = michal.then;
            entity = entity.bind(michal)(zuuluu, zuuluu);
 155:
            entity = undefined;
            return entity;
        }
    };
    michal = function(argFoo, argBar) { // Original name: batchRoleUpdate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argBar;
            michal = report.length;
            entity = 0;
            if(!(!(michal <= entity))) { _fun00004_ip = 155; continue _fun00003 }
 17:
            zuuluu = function() { // Original name: onEnd
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                entity['type'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 1;
            entity = golfie[entity];
            tangon = undefined;
            option = michal.bind(tangon)(entity);
            michal = option.dispatch;
            entity = {};
            verify = 'GUILD_SETTINGS_SUBMIT';
            entity['type'] = verify;
            entity = michal.bind(option)(entity);
            michal = _closure1_slot0;
            entity = 2;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            tangon = entity.HTTP;
            michal = tangon.patch;
            entity = {};
            option = _closure1_slot3;
            golfie = option.GUILD_ROLES;
            oscard = argFoo;
            oscard = golfie.bind(option)(oscard);
            entity['url'] = oscard;
            entity['body'] = report;
            report = true;
            entity['oldFormErrors'] = report;
            entity['rejectWithError'] = report;
            michal = michal.bind(tangon)(entity);
            entity = michal.then;
            entity = entity.bind(michal)(zuuluu, zuuluu);
 155:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot3 = report;
    report = {};
    report['batchChannelUpdate'] = tangon;
    report['batchRoleUpdate'] = michal;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'actions/native/GuildActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['batchChannelUpdate'] = tangon;
    zuuluu['batchRoleUpdate'] = michal;
    return entity;
})();