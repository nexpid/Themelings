// app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelFlags;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsSelectedResourceChannel
        _fun89326: for(var _fun89326_ip = 0; ; ) switch(_fun89326_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 4;
            zulu = report[mike];
            mike = undefined;
            options = tango.bind(mike)(zulu);
            golf = options.useStateFromStores;
            verify = _closure1_slot2;
            zulu = new Array(2);
            zulu[0] = verify;
            verify = _closure1_slot3;
            zulu[1] = verify;
            entity = function() {
                _fun89327: for(var _fun89327_ip = 0; ; ) switch(_fun89327_ip) {
 0:
                    tango = _closure1_slot2;
                    mike = tango.getChannel;
                    entity = _closure2_slot0;
                    entity = mike.bind(tango)(entity);
                    report = null;
                    if(!(report != entity)) { _fun89327_ip = 122; continue _fun89327 }
 30:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 5;
                    tango = tango[mike];
                    mike = undefined;
                    options = oscar.bind(mike)(tango);
                    golf = options.hasFlag;
                    oscar = entity.flags;
                    tango = _closure1_slot5;
                    tango = tango.IS_GUILD_RESOURCE_CHANNEL;
                    tango = golf.bind(options)(oscar, tango);
                    if(!tango) { _fun89327_ip = 122; continue _fun89327 }
 82:
                    tango = _closure1_slot3;
                    zulu = tango.getSelectedResourceChannelId;
                    report = report == entity;
                    mike = undefined;
                    if(report) { _fun89327_ip = 108; continue _fun89327 }
 103:
                    mike = entity.guild_id;
 108:
                    zulu = zulu.bind(tango)(mike);
                    mike = entity.id;
                    if(!(zulu !== mike)) { _fun89327_ip = 126; continue _fun89327 }
 122:
                    mike = undefined;
                    return mike;
 126:
                    entity = entity.guild_id;
                    return entity;
                }
            };
            zulu = golf.bind(options)(zulu, entity);
            entity = 6;
            entity = report[entity];
            report = tango.bind(mike)(entity);
            tango = report.useCanSeeOnboardingHome;
            entity = null;
            mike = zulu;
            if(!(entity == mike)) { _fun89326_ip = 103; continue _fun89326 }
 99:
            mike = _closure1_slot4;
 103:
            mike = tango.bind(report)(mike);
            entity = entity != zulu;
            if(!entity) { _fun89326_ip = 118; continue _fun89326 }
 115:
            entity = mike;
 118:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();