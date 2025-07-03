// app/modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    report = function(argFoo) { // Original name: isRestrictedFromShowingGuildPurchaseEntryPoints
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 35; continue _fun00001 }
 12:
            zuuluu = tangon.includes;
            michal = _closure1_slot3;
            michal = michal.NEW_PURCHASES_DISABLED;
            entity = zuuluu.bind(tangon)(michal);
 35:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: isRestrictedFromUpdatingCreatorMonetizationSettings
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00004_ip = 35; continue _fun00003 }
 12:
            zuuluu = tangon.includes;
            michal = _closure1_slot3;
            michal = michal.SETTINGS_READ_ONLY;
            entity = zuuluu.bind(tangon)(michal);
 35:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    oscard = 0;
    offset = option[oscard];
    entity = undefined;
    offset = verify.bind(entity)(offset);
    var _closure1_slot0 = offset;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.FetchState;
    var _closure1_slot1 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.CreatorMonetizationRestrictions;
    var _closure1_slot3 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildFeatures;
    var _closure1_slot4 = oscard;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['isRestrictedFromShowingGuildPurchaseEntryPoints'] = report;
    report = function(argFoo) { // Original name: shouldHideGuildPurchaseEntryPoints
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            entity = null;
            if(!(entity != golfie)) { _fun00006_ip = 126; continue _fun00005 }
 9:
            tangon = _closure1_slot0;
            zuuluu = tangon.getMonetizationRestrictionsFetchState;
            oscard = zuuluu.bind(tangon)(golfie);
            zuuluu = tangon.getMonetizationRestrictions;
            tangon = zuuluu.bind(tangon)(golfie);
            report = _closure1_slot2;
            zuuluu = report.getGuild;
            report = zuuluu.bind(report)(golfie);
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.FETCHED;
            if(!(oscard !== zuuluu)) { _fun00006_ip = 113; continue _fun00005 }
 66:
            oscard = entity == report;
            zuuluu = undefined;
            if(oscard) { _fun00006_ip = 101; continue _fun00005 }
 75:
            golfie = report.features;
            oscard = golfie.has;
            report = _closure1_slot4;
            report = report.CREATOR_MONETIZABLE_RESTRICTED;
            zuuluu = oscard.bind(golfie)(report);
 101:
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 111; continue _fun00005 }
 108:
            entity = zuuluu;
 111:
            _fun00006_ip = 124; continue _fun00005;
 113:
            zuuluu = _closure1_slot5;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 124:
            return entity;
 126:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldHideGuildPurchaseEntryPoints'] = report;
    zuuluu['isRestrictedFromUpdatingCreatorMonetizationSettings'] = tangon;
    tangon = function(argFoo) { // Original name: shouldRestrictUpdatingCreatorMonetizationSettings
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            entity = null;
            if(!(entity != golfie)) { _fun00008_ip = 126; continue _fun00007 }
 9:
            tangon = _closure1_slot0;
            zuuluu = tangon.getMonetizationRestrictionsFetchState;
            oscard = zuuluu.bind(tangon)(golfie);
            zuuluu = tangon.getMonetizationRestrictions;
            tangon = zuuluu.bind(tangon)(golfie);
            report = _closure1_slot2;
            zuuluu = report.getGuild;
            report = zuuluu.bind(report)(golfie);
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.FETCHED;
            if(!(oscard !== zuuluu)) { _fun00008_ip = 113; continue _fun00007 }
 66:
            oscard = entity == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 101; continue _fun00007 }
 75:
            golfie = report.features;
            oscard = golfie.has;
            report = _closure1_slot4;
            report = report.CREATOR_MONETIZABLE_RESTRICTED;
            zuuluu = oscard.bind(golfie)(report);
 101:
            entity = entity == zuuluu;
            if(entity) { _fun00008_ip = 111; continue _fun00007 }
 108:
            entity = zuuluu;
 111:
            _fun00008_ip = 124; continue _fun00007;
 113:
            zuuluu = _closure1_slot6;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 124:
            return entity;
 126:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldRestrictUpdatingCreatorMonetizationSettings'] = tangon;
    michal = function(argFoo) { // Original name: isRestrictedFromMonetizationReapplication
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00010_ip = 35; continue _fun00009 }
 12:
            zuuluu = tangon.includes;
            michal = _closure1_slot3;
            michal = michal.REAPPLICATION_DISABLED;
            entity = zuuluu.bind(tangon)(michal);
 35:
            return entity;
        }
    };
    zuuluu['isRestrictedFromMonetizationReapplication'] = michal;
    return entity;
})();