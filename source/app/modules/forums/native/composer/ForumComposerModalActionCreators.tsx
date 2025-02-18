// app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 4;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/ForumComposerModalActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            report = 0;
            michal = entity[report];
            entity = undefined;
            golfie = tangon.bind(entity)(michal);
            tangon = golfie.trackMobileForumComposerOpened;
            michal = {};
            option = oscard.guildId;
            michal['guildId'] = option;
            option = oscard.parentChannelId;
            michal['channelId'] = option;
            option = oscard.analyticsLocationObject;
            michal['location'] = option;
            michal = tangon.bind(golfie)(michal);
            tangon = oscard.isEdit;
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00002_ip = 90; continue _fun00001 }
 84:
            michal = oscard.isEdit;
 90:
            if(michal) { _fun00002_ip = 142; continue _fun00001 }
 93:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            report = tangon.bind(entity)(michal);
            tangon = report.trackForumCreateNewPostStarted;
            michal = {};
            golfie = oscard.guildId;
            michal['guildId'] = golfie;
            golfie = oscard.parentChannelId;
            michal['channelId'] = golfie;
            michal = tangon.bind(report)(michal);
 142:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            tangon = 1;
            tangon = michal[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.pushLazy;
            golfie = _closure1_slot0;
            zuuluu = 3;
            zuuluu = michal[zuuluu];
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = 2;
            zuuluu = michal[zuuluu];
            michal = michal.paths;
            zuuluu = golfie.bind(entity)(zuuluu, michal);
            michal = 'create-forum-post';
            michal = tangon.bind(report)(zuuluu, oscard, michal);
            return entity;
        }
    };
    zuuluu['openCreateForumPostModal'] = tangon;
    michal = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            michal = false;
 11:
            if(michal) { _fun00004_ip = 46; continue _fun00003 }
 14:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 0;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.trackMobileForumComposerDismissed;
            michal = michal.bind(zuuluu)();
 46:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.popWithKey;
            michal = 'create-forum-post';
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['closeCreateForumPostModal'] = michal;
    return entity;
})();