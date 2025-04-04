// app/modules/guild_badge/native/GuildBadgeImageSource.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function(argFoo, argBar, argBaz) { // Original name: resolveImageSource
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            entity = entity.premium;
            if(!entity) { _fun00002_ip = 27; continue _fun00001 }
 15:
            zuuluu = michal.premiumImageSource;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 97; continue _fun00001 }
 27:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isThemeLight;
            entity = argBaz;
            entity = zuuluu.bind(tangon)(entity);
            if(!entity) { _fun00002_ip = 81; continue _fun00001 }
 69:
            zuuluu = michal.imageSourceLight;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 89; continue _fun00001 }
 81:
            entity = michal.imageSource;
            _fun00002_ip = 95; continue _fun00001;
 89:
            entity = michal.imageSourceLight;
 95:
            _fun00002_ip = 103; continue _fun00001;
 97:
            entity = michal.premiumImageSource;
 103:
            return entity;
        }
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    report = {};
    oscard = 0;
    verify = option[oscard];
    entity = undefined;
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.STAFF;
    verify = {};
    yankee = 1;
    foxtra = option[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSource'] = foxtra;
    report[offset] = verify;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.PARTNERED;
    verify = {};
    foxtra = 2;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSource'] = foxtra;
    report[offset] = verify;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.VERIFIED;
    verify = {};
    foxtra = option[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSource'] = foxtra;
    report[offset] = verify;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.COMMUNITY;
    verify = {};
    foxtra = 3;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSource'] = foxtra;
    foxtra = 4;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSourceLight'] = foxtra;
    foxtra = 5;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['premiumImageSource'] = foxtra;
    report[offset] = verify;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.DISCOVERABLE;
    verify = {};
    foxtra = 6;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSource'] = foxtra;
    foxtra = 7;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['imageSourceLight'] = foxtra;
    foxtra = 8;
    foxtra = option[foxtra];
    foxtra = romeon.bind(entity)(foxtra);
    verify['premiumImageSource'] = foxtra;
    report[offset] = verify;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.VERIFIED_AND_PARTNERED;
    verify = {};
    yankee = option[yankee];
    yankee = romeon.bind(entity)(yankee);
    verify['imageSource'] = yankee;
    report[offset] = verify;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.BadgeCategory;
    offset = verify.CLAN;
    verify = {};
    report[offset] = verify;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.BadgeCategory;
    verify = oscard.NONE;
    oscard = {};
    report[verify] = oscard;
    var _closure1_slot2 = report;
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_badge/native/GuildBadgeImageSource.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['badgeVariants'] = report;
    zuuluu['resolveImageSource'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getGuildBadgeImageSource
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 10;
            entity = tangon[entity];
            oscard = undefined;
            golfie = zuuluu.bind(oscard)(entity);
            report = golfie.getGuildTraits;
            entity = argFoo;
            report = report.bind(golfie)(entity);
            entity = 0;
            entity = tangon[entity];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.getBadgeCategory;
            zuuluu = entity.bind(zuuluu)(report);
            entity = _closure1_slot2;
            tangon = entity[zuuluu];
            entity = null;
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00004_ip = 92; continue _fun00003 }
 78:
            zuuluu = _closure1_slot3;
            michal = argBar;
            entity = zuuluu.bind(oscard)(tangon, report, michal);
 92:
            return entity;
        }
    };
    zuuluu['getGuildBadgeImageSource'] = michal;
    return entity;
})();