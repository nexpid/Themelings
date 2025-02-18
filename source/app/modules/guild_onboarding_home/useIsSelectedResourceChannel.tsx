// app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsSelectedResourceChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            zuuluu = report[michal];
            michal = undefined;
            option = tangon.bind(michal)(zuuluu);
            golfie = option.useStateFromStores;
            verify = _closure1_slot2;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            verify = _closure1_slot3;
            zuuluu[1] = verify;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot2;
                    michal = tangon.getChannel;
                    entity = _closure2_slot0;
                    entity = michal.bind(tangon)(entity);
                    report = null;
                    if(!(report != entity)) { _fun00004_ip = 122; continue _fun00003 }
 30:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 5;
                    tangon = tangon[michal];
                    michal = undefined;
                    option = oscard.bind(michal)(tangon);
                    golfie = option.hasFlag;
                    oscard = entity.flags;
                    tangon = _closure1_slot5;
                    tangon = tangon.IS_GUILD_RESOURCE_CHANNEL;
                    tangon = golfie.bind(option)(oscard, tangon);
                    if(!tangon) { _fun00004_ip = 122; continue _fun00003 }
 82:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getSelectedResourceChannelId;
                    report = report == entity;
                    michal = undefined;
                    if(report) { _fun00004_ip = 108; continue _fun00003 }
 103:
                    michal = entity.guild_id;
 108:
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = entity.id;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 126; continue _fun00003 }
 122:
                    michal = undefined;
                    return michal;
 126:
                    entity = entity.guild_id;
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(zuuluu, entity);
            entity = 6;
            entity = report[entity];
            report = tangon.bind(michal)(entity);
            tangon = report.useCanSeeOnboardingHome;
            entity = null;
            michal = zuuluu;
            if(!(entity == michal)) { _fun00002_ip = 103; continue _fun00001 }
 99:
            michal = _closure1_slot4;
 103:
            michal = tangon.bind(report)(michal);
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 118; continue _fun00001 }
 115:
            entity = michal;
 118:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();