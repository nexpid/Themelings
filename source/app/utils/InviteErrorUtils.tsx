// app/utils/InviteErrorUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AbortCodes;
    var _closure1_slot4 = golfie;
    golfie = tangon.HelpdeskArticles;
    var _closure1_slot5 = golfie;
    golfie = tangon.MAX_USER_GUILDS;
    var _closure1_slot6 = golfie;
    tangon = tangon.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/InviteErrorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getDescriptiveInviteError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot4;
            entity = entity.TOO_MANY_USER_GUILDS;
            if(!(entity !== zuuluu)) { _fun00002_ip = 284; continue _fun00001 }
 23:
            entity = _closure1_slot4;
            entity = entity.GUILD_AT_CAPACITY;
            if(!(entity !== zuuluu)) { _fun00002_ip = 171; continue _fun00001 }
 40:
            entity = _closure1_slot4;
            entity = entity.GUILD_JOIN_INVITE_LIMITED_ACCESS;
            if(!(entity !== zuuluu)) { _fun00002_ip = 58; continue _fun00001 }
 54:
            entity = null;
            return entity;
 58:
            entity = {};
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 3;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            verify = tangon.intl;
            report = verify.string;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            tangon = tangon.t;
            tangon = tangon.kJwpBQ;
            tangon = report.bind(verify)(tangon);
            entity['title'] = tangon;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.ZUEGFh;
            zuuluu = tangon.bind(report)(zuuluu);
            entity['description'] = zuuluu;
            return entity;
 171:
            entity = {};
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 3;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            verify = tangon.intl;
            report = verify.string;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            tangon = tangon.t;
            tangon = tangon.ZZlox8;
            tangon = report.bind(verify)(tangon);
            entity['title'] = tangon;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.ZUEGFh;
            zuuluu = tangon.bind(report)(zuuluu);
            entity['description'] = zuuluu;
            return entity;
 284:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.canUseIncreasedGuildCap;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00002_ip = 363; continue _fun00001 }
 333:
            entity = null;
            zuuluu = entity == tangon;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 354; continue _fun00001 }
 344:
            zuuluu = tangon.isStaff;
            entity = zuuluu.bind(tangon)();
 354:
            if(entity) { _fun00002_ip = 363; continue _fun00001 }
 357:
            offset = _closure1_slot6;
            _fun00002_ip = 367; continue _fun00001;
 363:
            offset = _closure1_slot7;
 367:
            entity = {};
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            verify = zuuluu.intl;
            option = verify.formatToPlainString;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.ttJ/ho;
            zuuluu = {};
            zuuluu['quantity'] = offset;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            entity['title'] = zuuluu;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.iLyuDA;
            michal = zuuluu.bind(tangon)(michal);
            entity['description'] = michal;
            return entity;
        }
    };
    zuuluu['getDescriptiveInviteError'] = tangon;
    michal = function(argFoo) { // Original name: getInviteError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot4;
            michal = michal.TOO_MANY_USER_GUILDS;
            if(!(michal !== zuuluu)) { _fun00004_ip = 436; continue _fun00003 }
 23:
            michal = _closure1_slot4;
            michal = michal.GUILD_AT_CAPACITY;
            if(!(michal !== zuuluu)) { _fun00004_ip = 375; continue _fun00003 }
 40:
            michal = _closure1_slot4;
            michal = michal.INVALID_COUNTRY_CODE;
            if(!(michal !== zuuluu)) { _fun00004_ip = 314; continue _fun00003 }
 57:
            michal = _closure1_slot4;
            michal = michal.INVALID_CANNOT_FRIEND_SELF;
            if(!(michal !== zuuluu)) { _fun00004_ip = 253; continue _fun00003 }
 74:
            michal = _closure1_slot4;
            michal = michal.INVITES_DISABLED;
            if(!(michal !== zuuluu)) { _fun00004_ip = 149; continue _fun00003 }
 88:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.dDZRd3;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 149:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 3;
            tangon = verify[michal];
            option = undefined;
            tangon = zuuluu.bind(option)(tangon);
            report = tangon.intl;
            tangon = report.format;
            michal = verify[michal];
            michal = zuuluu.bind(option)(michal);
            michal = michal.t;
            zuuluu = michal.RXSeLi;
            michal = {};
            golfie = _closure1_slot1;
            oscard = 4;
            oscard = verify[oscard];
            option = golfie.bind(option)(oscard);
            golfie = option.getArticleURL;
            oscard = _closure1_slot5;
            oscard = oscard.INVITE_DISABLED;
            oscard = golfie.bind(option)(oscard);
            michal['articleLink'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 253:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.mY2R+P;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 314:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.sRJGR0;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 375:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.M6unND;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 436:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 3;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.iLyuDA;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getInviteError'] = michal;
    return entity;
})();