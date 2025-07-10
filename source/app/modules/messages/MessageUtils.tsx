// app/modules/messages/MessageUtils.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/MessageUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canViewPotentiallyNSFWChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.getCurrentUser;
            report = entity.bind(michal)();
            zuuluu = _closure1_slot2;
            michal = zuuluu.getChannel;
            entity = argFoo;
            golfie = michal.bind(zuuluu)(entity);
            oscard = null;
            entity = oscard != report;
            if(!entity) { _fun00002_ip = 46; continue _fun00001 }
 42:
            entity = oscard != golfie;
 46:
            if(!entity) { _fun00002_ip = 141; continue _fun00001 }
 49:
            option = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = option.bind(michal)(zuuluu);
            michal = zuuluu.isChannelNSFW;
            michal = michal.bind(zuuluu)(golfie);
            michal = !michal;
            if(michal) { _fun00002_ip = 138; continue _fun00001 }
 88:
            zuuluu = report.nsfwAllowed;
            zuuluu = oscard != zuuluu;
            if(!zuuluu) { _fun00002_ip = 107; continue _fun00001 }
 101:
            zuuluu = report.nsfwAllowed;
 107:
            if(!zuuluu) { _fun00002_ip = 135; continue _fun00001 }
 110:
            oscard = _closure1_slot3;
            report = oscard.didAgree;
            tangon = golfie.getGuildId;
            tangon = tangon.bind(golfie)();
            zuuluu = report.bind(oscard)(tangon);
 135:
            michal = zuuluu;
 138:
            entity = michal;
 141:
            return entity;
        }
    };
    zuuluu['canViewPotentiallyNSFWChannel'] = tangon;
    michal = function(argFoo) { // Original name: getGuildIdFromMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getChannel;
            entity = argFoo;
            entity = entity.channel_id;
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = null;
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00004_ip = 41; continue _fun00003 }
 36:
            michal = tangon.guild_id;
 41:
            zuuluu = zuuluu != michal;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 53; continue _fun00003 }
 50:
            entity = michal;
 53:
            return entity;
        }
    };
    zuuluu['getGuildIdFromMessage'] = michal;
    return entity;
})();