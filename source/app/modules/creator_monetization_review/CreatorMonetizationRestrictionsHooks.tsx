// app/modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FetchState;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = golf;
    tango = tango.GuildFeatures;
    var _closure1_slot9 = tango;
    tango = function(argFoo) { // Original name: useCreatorMonetizationRestrictions
        _fun81310: for(var _fun81310_ip = 0; ; ) switch(_fun81310_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            tango = _closure1_slot1;
            report = _closure1_slot3;
            entity = 4;
            entity = report[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            entity = entity.bind(report)();
            var _closure2_slot1 = entity;
            options = _closure1_slot4;
            golf = options.useEffect;
            tango = new Array(2);
            tango[0] = zulu;
            tango[1] = entity;
            entity = function() {
                _fun81311: for(var _fun81311_ip = 0; ; ) switch(_fun81311_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun81311_ip = 44; continue _fun81311 }
 16:
                    tango = _closure2_slot0;
                    zulu = tango.hasFeature;
                    mike = _closure1_slot9;
                    mike = mike.CREATOR_MONETIZABLE_RESTRICTED;
                    entity = zulu.bind(tango)(mike);
 44:
                    if(!entity) { _fun81311_ip = 88; continue _fun81311 }
 47:
                    oscar = _closure1_slot5;
                    tango = oscar.getMonetizationRestrictionsFetchState;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    zulu = tango.bind(oscar)(zulu);
                    mike = _closure1_slot6;
                    mike = mike.NOT_FETCHED;
                    entity = zulu === mike;
 88:
                    if(!entity) { _fun81311_ip = 148; continue _fun81311 }
 91:
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.fetchMonetizationRestrictions;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    entity = {};
                    report = _closure2_slot1;
                    entity['signal'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 148:
                    entity = undefined;
                    return entity;
                }
            };
            entity = golf.bind(options)(entity, tango);
            entity = null;
            tango = entity == zulu;
            entity = undefined;
            if(tango) { _fun81310_ip = 92; continue _fun81310 }
 87:
            entity = zulu.id;
 92:
            var _closure2_slot2 = entity;
            entity = {};
            tango = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 6;
            options = golf[zulu];
            yankee = tango.bind(report)(options);
            offset = yankee.useStateFromStoresArray;
            oscar = _closure1_slot5;
            verify = new Array(1);
            verify[0] = oscar;
            options = function() {
                _fun81312: for(var _fun81312_ip = 0; ; ) switch(_fun81312_ip) {
 0:
                    tango = _closure1_slot5;
                    zulu = tango.getMonetizationRestrictions;
                    oscar = _closure2_slot2;
                    mike = null;
                    if(!(mike == oscar)) { _fun81312_ip = 32; continue _fun81312 }
 26:
                    entity = _closure1_slot8;
                    _fun81312_ip = 36; continue _fun81312;
 32:
                    entity = _closure2_slot2;
 36:
                    entity = zulu.bind(tango)(entity);
                    if(!(mike == entity)) { _fun81312_ip = 49; continue _fun81312 }
 45:
                    entity = new Array(0);
 49:
                    return entity;
                }
            };
            options = offset.bind(yankee)(verify, options);
            entity['restrictions'] = options;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                _fun81313: for(var _fun81313_ip = 0; ; ) switch(_fun81313_ip) {
 0:
                    tango = _closure1_slot5;
                    zulu = tango.getMonetizationRestrictionsFetchState;
                    oscar = _closure2_slot2;
                    mike = null;
                    if(!(mike == oscar)) { _fun81313_ip = 32; continue _fun81313 }
 26:
                    mike = _closure1_slot8;
                    _fun81313_ip = 36; continue _fun81313;
 32:
                    mike = _closure2_slot2;
 36:
                    mike = zulu.bind(tango)(mike);
                    entity = _closure1_slot6;
                    entity = entity.FETCHING;
                    entity = mike === entity;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            entity['restrictionsLoading'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun81314: for(var _fun81314_ip = 0; ; ) switch(_fun81314_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 6;
            mike = tango[mike];
            oscar = undefined;
            report = zulu.bind(oscar)(mike);
            tango = report.useStateFromStores;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = tango.bind(report)(zulu, entity, mike);
            entity = _closure1_slot10;
            entity = entity.bind(oscar)(verify);
            offset = entity.restrictions;
            mike = entity.restrictionsLoading;
            entity = {};
            report = null;
            tango = report == verify;
            zulu = undefined;
            if(tango) { _fun81314_ip = 128; continue _fun81314 }
 107:
            options = verify.hasFeature;
            tango = _closure1_slot9;
            tango = tango.CREATOR_MONETIZABLE;
            zulu = options.bind(verify)(tango);
 128:
            if(zulu) { _fun81314_ip = 164; continue _fun81314 }
 131:
            options = report == verify;
            tango = undefined;
            if(options) { _fun81314_ip = 161; continue _fun81314 }
 140:
            yankee = verify.hasFeature;
            options = _closure1_slot9;
            options = options.CREATOR_MONETIZABLE_PROVISIONAL;
            tango = yankee.bind(verify)(options);
 161:
            zulu = tango;
 164:
            zulu = !zulu;
            if(zulu) { _fun81314_ip = 252; continue _fun81314 }
 170:
            if(mike) { _fun81314_ip = 206; continue _fun81314 }
 173:
            options = _closure1_slot0;
            yankee = _closure1_slot3;
            tango = 7;
            tango = yankee[tango];
            options = options.bind(oscar)(tango);
            tango = options.isRestrictedFromShowingGuildPurchaseEntryPoints;
            tango = tango.bind(options)(offset);
            _fun81314_ip = 249; continue _fun81314;
 206:
            options = report == verify;
            oscar = undefined;
            if(options) { _fun81314_ip = 236; continue _fun81314 }
 215:
            options = verify.hasFeature;
            golf = _closure1_slot9;
            golf = golf.CREATOR_MONETIZABLE_RESTRICTED;
            oscar = options.bind(verify)(golf);
 236:
            report = report == oscar;
            if(report) { _fun81314_ip = 246; continue _fun81314 }
 243:
            report = oscar;
 246:
            tango = report;
 249:
            zulu = tango;
 252:
            entity['shouldHideGuildPurchaseEntryPoints'] = zulu;
            entity['restrictionsLoading'] = mike;
            return entity;
        }
    };
    zulu['useShouldHideGuildPurchaseEntryPoints'] = tango;
    tango = function(argFoo) {
        _fun81316: for(var _fun81316_ip = 0; ; ) switch(_fun81316_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 6;
            mike = report[mike];
            report = undefined;
            golf = zulu.bind(report)(mike);
            oscar = golf.useStateFromStores;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(golf)(zulu, entity, mike);
            entity = _closure1_slot10;
            entity = entity.bind(report)(oscar);
            golf = entity.restrictions;
            mike = entity.restrictionsLoading;
            if(mike) { _fun81316_ip = 130; continue _fun81316 }
 97:
            zulu = _closure1_slot0;
            options = _closure1_slot3;
            entity = 7;
            entity = options[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.isRestrictedFromUpdatingCreatorMonetizationSettings;
            zulu = entity.bind(zulu)(golf);
            _fun81316_ip = 175; continue _fun81316;
 130:
            entity = null;
            golf = entity == oscar;
            report = undefined;
            if(golf) { _fun81316_ip = 162; continue _fun81316 }
 141:
            options = oscar.hasFeature;
            golf = _closure1_slot9;
            golf = golf.CREATOR_MONETIZABLE_RESTRICTED;
            report = options.bind(oscar)(golf);
 162:
            entity = entity == report;
            if(entity) { _fun81316_ip = 172; continue _fun81316 }
 169:
            entity = report;
 172:
            zulu = entity;
 175:
            entity = null;
            entity = entity == oscar;
            if(entity) { _fun81316_ip = 208; continue _fun81316 }
 184:
            report = oscar.hasFeature;
            tango = _closure1_slot9;
            tango = tango.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING;
            tango = report.bind(oscar)(tango);
            entity = !tango;
 208:
            report = !entity;
            entity = {};
            tango = zulu;
            if(tango) { _fun81316_ip = 222; continue _fun81316 }
 219:
            tango = report;
 222:
            entity['shouldRestrictUpdatingCreatorMonetizationSettings'] = tango;
            zulu = !zulu;
            entity['allowSelfRemoveMonetization'] = zulu;
            entity['restrictionsLoading'] = mike;
            return entity;
        }
    };
    zulu['useShouldRestrictUpdatingCreatorMonetizationSettings'] = tango;
    mike = function(argFoo) {
        offset = argFoo;
        var _closure2_slot0 = offset;
        oscar = _closure1_slot0;
        golf = _closure1_slot3;
        zulu = 6;
        zulu = golf[zulu];
        tango = undefined;
        verify = oscar.bind(tango)(zulu);
        options = verify.useStateFromStores;
        zulu = _closure1_slot7;
        report = new Array(1);
        report[0] = zulu;
        zulu = new Array(1);
        zulu[0] = offset;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.getGuild;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = options.bind(verify)(report, mike, zulu);
        entity = _closure1_slot10;
        entity = entity.bind(tango)(mike);
        report = entity.restrictions;
        mike = entity.restrictionsLoading;
        entity = {};
        zulu = 7;
        zulu = golf[zulu];
        tango = oscar.bind(tango)(zulu);
        zulu = tango.isRestrictedFromMonetizationReapplication;
        zulu = zulu.bind(tango)(report);
        entity['isMonetizationReapplicationDisabled'] = zulu;
        entity['restrictionsLoading'] = mike;
        return entity;
    };
    zulu['useIsMonetizationReapplicationDisabled'] = mike;
    return entity;
})();