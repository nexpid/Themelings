// app/modules/user_profile/preloadUserBannerImage.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/preloadUserBannerImage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: preloadUserBannerImage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            option = argBar;
            entity = global;
            michal = entity.Image;
            zuuluu = 'undefined';
            michal = typeof michal;
            if(!(zuuluu !== michal)) { _fun00002_ip = 378; continue _fun00001 }
 28:
            michal = golfie.user;
            zuuluu = null;
            tangon = zuuluu == michal;
            verify = undefined;
            yankee = undefined;
            if(tangon) { _fun00002_ip = 51; continue _fun00001 }
 46:
            yankee = michal.id;
 51:
            if(!(zuuluu != yankee)) { _fun00002_ip = 378; continue _fun00001 }
 58:
            michal = '';
            if(!(michal !== yankee)) { _fun00002_ip = 378; continue _fun00001 }
 69:
            tangon = zuuluu != option;
            if(!tangon) { _fun00002_ip = 101; continue _fun00001 }
 76:
            report = golfie.guild_member_profile;
            oscard = zuuluu == report;
            michal = undefined;
            if(oscard) { _fun00002_ip = 97; continue _fun00001 }
 91:
            michal = report.banner;
 97:
            tangon = zuuluu != michal;
 101:
            michal = undefined;
            if(!tangon) { _fun00002_ip = 209; continue _fun00001 }
 106:
            offset = _closure1_slot0;
            romeon = _closure1_slot1;
            tangon = 0;
            tangon = romeon[tangon];
            oscard = offset.bind(verify)(tangon);
            report = oscard.getGuildMemberBannerURL;
            tangon = {};
            tangon['id'] = yankee;
            tangon['guildId'] = option;
            option = golfie.guild_member_profile;
            option = option.banner;
            tangon['banner'] = option;
            option = 1;
            option = romeon[option];
            option = offset.bind(verify)(option);
            offset = option.GifAutoPlay;
            option = offset.getSetting;
            option = option.bind(offset)();
            tangon['canAnimate'] = option;
            option = 600;
            tangon['size'] = option;
            michal = report.bind(oscard)(tangon);
 209:
            report = zuuluu == golfie;
            tangon = undefined;
            if(report) { _fun00002_ip = 239; continue _fun00001 }
 218:
            report = golfie.user_profile;
            oscard = zuuluu == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 239; continue _fun00001 }
 233:
            tangon = report.banner;
 239:
            if(!(zuuluu != tangon)) { _fun00002_ip = 342; continue _fun00001 }
 243:
            option = _closure1_slot0;
            offset = _closure1_slot1;
            tangon = 0;
            tangon = offset[tangon];
            oscard = option.bind(verify)(tangon);
            report = oscard.getUserBannerURL;
            tangon = {};
            tangon['id'] = yankee;
            golfie = golfie.user_profile;
            golfie = golfie.banner;
            tangon['banner'] = golfie;
            golfie = 1;
            golfie = offset[golfie];
            golfie = option.bind(verify)(golfie);
            option = golfie.GifAutoPlay;
            golfie = option.getSetting;
            golfie = golfie.bind(option)();
            tangon['canAnimate'] = golfie;
            golfie = 600;
            tangon['size'] = golfie;
            michal = report.bind(oscard)(tangon);
 342:
            if(!(zuuluu != michal)) { _fun00002_ip = 378; continue _fun00001 }
 346:
            entity = entity.Image;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            kiloes = zuuluu;
            entity = new kiloes[entity](backup);
            entity = entity instanceof Object ? entity : zuuluu;
            entity['src'] = michal;
 378:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();