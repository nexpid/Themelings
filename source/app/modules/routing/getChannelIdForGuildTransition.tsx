// app/modules/routing/getChannelIdForGuildTransition.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/routing/getChannelIdForGuildTransition.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getChannelIdForGuildTransition
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            mike = _closure1_slot5;
            entity = mike.getChannelId;
            entity = entity.bind(mike)(golf);
            zulu = _closure1_slot4;
            mike = zulu.getDefaultChannel;
            report = mike.bind(zulu)(golf);
            zulu = null;
            oscar = zulu == report;
            options = undefined;
            mike = undefined;
            if(oscar) { _fun00002_ip = 54; continue _fun00001 }
 49:
            mike = report.id;
 54:
            report = _closure1_slot6;
            report = report.GUILD_ONBOARDING;
            if(!(entity === report)) { _fun00002_ip = 88; continue _fun00001 }
 68:
            oscar = _closure1_slot2;
            report = oscar.shouldShowOnboarding;
            report = report.bind(oscar)(golf);
            if(report) { _fun00002_ip = 88; continue _fun00001 }
 86:
            return mike;
 88:
            report = _closure1_slot6;
            report = report.GUILD_HOME;
            if(!(entity === report)) { _fun00002_ip = 138; continue _fun00001 }
 102:
            oscar = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            oscar = oscar.bind(options)(report);
            report = oscar.canSeeOnboardingHome;
            report = report.bind(oscar)(golf);
            if(report) { _fun00002_ip = 138; continue _fun00001 }
 136:
            return mike;
 138:
            report = _closure1_slot3;
            tango = report.getChannel;
            tango = tango.bind(report)(entity);
            if(!(zulu != tango)) { _fun00002_ip = 169; continue _fun00001 }
 156:
            zulu = tango.isGuildVocal;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun00002_ip = 172; continue _fun00001 }
 169:
            entity = mike;
 172:
            return entity;
        }
    };
    zulu['getChannelIdForGuildTransition'] = mike;
    return entity;
})();