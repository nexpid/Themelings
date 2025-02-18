// app/modules/guild_badge/BadgeCategory.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    tangon = {};
    golfie = 0;
    tangon['PARTNERED'] = golfie;
    entity = 'PARTNERED';
    tangon[golfie] = entity;
    entity = 1;
    tangon['VERIFIED'] = entity;
    golfie = 'VERIFIED';
    tangon[entity] = golfie;
    option = 2;
    tangon['VERIFIED_AND_PARTNERED'] = option;
    golfie = 'VERIFIED_AND_PARTNERED';
    tangon[option] = golfie;
    option = 3;
    tangon['COMMUNITY'] = option;
    golfie = 'COMMUNITY';
    tangon[option] = golfie;
    option = 4;
    tangon['DISCOVERABLE'] = option;
    golfie = 'DISCOVERABLE';
    tangon[option] = golfie;
    option = 5;
    tangon['STAFF'] = option;
    golfie = 'STAFF';
    tangon[option] = golfie;
    option = 6;
    tangon['CLAN'] = option;
    golfie = 'CLAN';
    tangon[option] = golfie;
    option = 7;
    tangon['NONE'] = option;
    golfie = 'NONE';
    tangon[option] = golfie;
    var _closure1_slot2 = tangon;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_badge/BadgeCategory.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['BadgeCategory'] = tangon;
    michal = function(argFoo) { // Original name: getBadgeCategory
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.staff;
            if(michal) { _fun00002_ip = 222; continue _fun00001 }
 15:
            michal = entity.verified;
            if(!michal) { _fun00002_ip = 36; continue _fun00001 }
 24:
            michal = entity.partnered;
            if(michal) { _fun00002_ip = 207; continue _fun00001 }
 36:
            michal = entity.verified;
            if(michal) { _fun00002_ip = 192; continue _fun00001 }
 48:
            michal = entity.partnered;
            if(michal) { _fun00002_ip = 177; continue _fun00001 }
 57:
            michal = entity.community;
            if(!michal) { _fun00002_ip = 112; continue _fun00001 }
 66:
            tangon = entity.visibility;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 0;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            zuuluu = zuuluu.GuildVisibility;
            zuuluu = zuuluu.PUBLIC;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 165; continue _fun00001 }
 112:
            tangon = entity.clan;
            if(tangon) { _fun00002_ip = 153; continue _fun00001 }
 124:
            entity = entity.community;
            tangon = _closure1_slot2;
            if(entity) { _fun00002_ip = 145; continue _fun00001 }
 137:
            entity = tangon.NONE;
            _fun00002_ip = 151; continue _fun00001;
 145:
            entity = tangon.COMMUNITY;
 151:
            _fun00002_ip = 163; continue _fun00001;
 153:
            zuuluu = _closure1_slot2;
            entity = zuuluu.CLAN;
 163:
            _fun00002_ip = 175; continue _fun00001;
 165:
            michal = _closure1_slot2;
            entity = michal.DISCOVERABLE;
 175:
            _fun00002_ip = 190; continue _fun00001;
 177:
            michal = _closure1_slot2;
            entity = michal.PARTNERED;
 190:
            _fun00002_ip = 205; continue _fun00001;
 192:
            michal = _closure1_slot2;
            entity = michal.VERIFIED;
 205:
            _fun00002_ip = 220; continue _fun00001;
 207:
            michal = _closure1_slot2;
            entity = michal.VERIFIED_AND_PARTNERED;
 220:
            _fun00002_ip = 235; continue _fun00001;
 222:
            michal = _closure1_slot2;
            entity = michal.STAFF;
 235:
            return entity;
        }
    };
    zuuluu['getBadgeCategory'] = michal;
    return entity;
})();