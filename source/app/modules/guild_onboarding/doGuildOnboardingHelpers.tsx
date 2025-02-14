// app/modules/guild_onboarding/doGuildOnboardingHelpers.tsx
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
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/doGuildOnboardingHelpers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: waitForOnboardingCompletion
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure1_slot3;
            mike = zulu.addConditionalChangeListener;
            entity = function() {
                _fun61352: for(var _fun61352_ip = 0; ; ) switch(_fun61352_ip) {
 0:
                    report = _closure1_slot3;
                    zulu = report.getSelfMember;
                    entity = _closure2_slot0;
                    options = zulu.bind(report)(entity);
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 2;
                    entity = zulu[entity];
                    zulu = undefined;
                    golf = report.bind(zulu)(entity);
                    oscar = golf.hasFlag;
                    report = null;
                    verify = report == options;
                    entity = undefined;
                    if(verify) { _fun61352_ip = 69; continue _fun61352 }
 64:
                    entity = options.flags;
 69:
                    options = report != entity;
                    report = 0;
                    if(!options) { _fun61352_ip = 81; continue _fun61352 }
 78:
                    report = entity;
 81:
                    entity = _closure1_slot4;
                    entity = entity.COMPLETED_ONBOARDING;
                    entity = oscar.bind(golf)(report, entity);
                    entity = !entity;
                    if(entity) { _fun61352_ip = 151; continue _fun61352 }
 103:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    report = report.bind(zulu)(tango);
                    tango = report.finishOnboarding;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(mike);
                    mike = _closure3_slot0;
                    mike = mike.bind(zulu)();
                    entity = false;
 151:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['waitForOnboardingCompletion'] = mike;
    return entity;
})();