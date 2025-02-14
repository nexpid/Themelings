// app/modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
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
    golf = tango.GuildFeatures;
    options = golf.CREATOR_MONETIZABLE_PROVISIONAL;
    tango = new Array(5);
    tango[0] = options;
    options = golf.CREATOR_MONETIZABLE;
    tango[1] = options;
    options = golf.CREATOR_MONETIZABLE_WHITEGLOVE;
    tango[2] = options;
    options = golf.CREATOR_MONETIZABLE_DISABLED;
    tango[3] = options;
    golf = golf.CREATOR_MONETIZABLE_RESTRICTED;
    tango[4] = golf;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCanSeeCreatorMonetizationOnboardingV2Upsell
        _fun116017: for(var _fun116017_ip = 0; ; ) switch(_fun116017_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            zulu = verify[entity];
            golf = undefined;
            offset = options.bind(golf)(zulu);
            oscar = offset.useStateFromStores;
            zulu = _closure1_slot2;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(offset)(report, zulu);
            var _closure2_slot1 = oscar;
            entity = verify[entity];
            offset = options.bind(golf)(entity);
            report = offset.useStateFromStores;
            entity = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            report = report.bind(offset)(zulu, entity);
            entity = 4;
            zulu = verify[entity];
            offset = options.bind(golf)(zulu);
            zulu = offset.useGuildRoleSubscriptionSettingsVisibility;
            zulu = zulu.bind(offset)(oscar);
            entity = verify[entity];
            entity = options.bind(golf)(entity);
            entity = entity.GuildRoleSubscriptionSettingsVisibility;
            entity = entity.VISIBLE;
            entity = zulu === entity;
            zulu = null;
            if(!(zulu != oscar)) { _fun116017_ip = 208; continue _fun116017 }
 161:
            zulu = oscar.isOwner;
            zulu = zulu.bind(oscar)(report);
            report = _closure1_slot4;
            tango = report.every;
            mike = function(argFoo) {
                zulu = _closure2_slot1;
                mike = zulu.hasFeature;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            mike = tango.bind(report)(mike);
            if(!entity) { _fun116017_ip = 200; continue _fun116017 }
 197:
            entity = zulu;
 200:
            if(!entity) { _fun116017_ip = 206; continue _fun116017 }
 203:
            entity = mike;
 206:
            return entity;
 208:
            entity = false;
            return entity;
        }
    };
    zulu['useCanSeeCreatorMonetizationOnboardingV2Upsell'] = tango;
    mike = function(argFoo) { // Original name: canSeeCreatorMonetizationOnboardingV2Upsell
        _fun116021: for(var _fun116021_ip = 0; ; ) switch(_fun116021_ip) {
 0:
            report = _closure1_slot2;
            zulu = report.getGuild;
            entity = argFoo;
            oscar = zulu.bind(report)(entity);
            var _closure2_slot0 = oscar;
            entity = null;
            if(!(entity != oscar)) { _fun116021_ip = 161; continue _fun116021 }
 35:
            report = _closure1_slot3;
            zulu = report.getCurrentUser;
            report = zulu.bind(report)();
            if(!(entity != report)) { _fun116021_ip = 157; continue _fun116021 }
 52:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 4;
            zulu = verify[entity];
            golf = undefined;
            offset = options.bind(golf)(zulu);
            zulu = offset.getGuildRoleSubscriptionSettingsVisibility;
            zulu = zulu.bind(offset)(oscar);
            entity = verify[entity];
            entity = options.bind(golf)(entity);
            entity = entity.GuildRoleSubscriptionSettingsVisibility;
            entity = entity.VISIBLE;
            entity = zulu === entity;
            zulu = oscar.isOwner;
            zulu = zulu.bind(oscar)(report);
            report = _closure1_slot4;
            tango = report.every;
            mike = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.hasFeature;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            mike = tango.bind(report)(mike);
            if(!entity) { _fun116021_ip = 149; continue _fun116021 }
 146:
            entity = zulu;
 149:
            if(!entity) { _fun116021_ip = 155; continue _fun116021 }
 152:
            entity = mike;
 155:
            return entity;
 157:
            entity = false;
            return entity;
 161:
            entity = false;
            return entity;
        }
    };
    zulu['canSeeCreatorMonetizationOnboardingV2Upsell'] = mike;
    return entity;
})();