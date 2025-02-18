// app/modules/content_inventory/ContentInventoryActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argCor;
    var _closure1_slot1 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/content_inventory/ContentInventoryActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 6;
        michal = tangon[entity];
        entity = undefined;
        golfie = zuuluu.bind(entity)(michal);
        report = golfie.dispatch;
        michal = {};
        option = 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN';
        michal['type'] = option;
        michal = report.bind(golfie)(michal);
        michal = 7;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot8;
        zuuluu = michal.MEMBERLIST_CONTENT_FEED_HIDDEN;
        michal = {};
        option = _closure1_slot4;
        golfie = option.getChannelId;
        golfie = golfie.bind(option)();
        michal['channel_id'] = golfie;
        option = _closure1_slot5;
        golfie = option.getGuildId;
        golfie = golfie.bind(option)();
        michal['guild_id'] = golfie;
        oscard = _closure1_slot7;
        oscard = oscard.hidden;
        michal['hidden'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['toggleMemberListContentFeedHidden'] = tangon;
    tangon = function() { // Original name: onGameProfileOpen
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GAME_PROFILE_OPEN';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['onGameProfileOpen'] = tangon;
    tangon = function(argFoo) { // Original name: onTapContentInventoryEntryEmbed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.message;
            zuuluu = entity.authorId;
            michal = entity.tappedElement;
            golfie = _closure1_slot3;
            tangon = golfie.getChannel;
            entity = oscard.channel_id;
            verify = tangon.bind(golfie)(entity);
            entity = 'avatar';
            tangon = entity === michal;
            if(tangon) { _fun00002_ip = 64; continue _fun00001 }
 53:
            entity = 'username';
            if(!(entity === michal)) { _fun00002_ip = 220; continue _fun00001 }
 64:
            michal = _closure1_slot6;
            entity = michal.getUser;
            offset = entity.bind(michal)(zuuluu);
            option = null;
            if(!(option != offset)) { _fun00002_ip = 220; continue _fun00001 }
 88:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 8;
            entity = zuuluu[entity];
            golfie = undefined;
            zuuluu = michal.bind(golfie)(entity);
            michal = zuuluu.showUserProfile;
            entity = {};
            offset = offset.id;
            entity['userId'] = offset;
            offset = option == verify;
            option = undefined;
            if(offset) { _fun00002_ip = 141; continue _fun00001 }
 136:
            option = verify.id;
 141:
            entity['channelId'] = option;
            oscard = oscard.id;
            entity['messageId'] = oscard;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 9;
            report = option[report];
            report = oscard.bind(golfie)(report);
            if(tangon) { _fun00002_ip = 193; continue _fun00001 }
 177:
            oscard = report.USERNAME;
            tangon = new Array(1);
            tangon[0] = oscard;
            _fun00002_ip = 210; continue _fun00001;
 193:
            oscard = report.AVATAR;
            report = new Array(1);
            report[0] = oscard;
            tangon = report;
 210:
            entity['sourceAnalyticsLocations'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 220:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['onTapContentInventoryEntryEmbed'] = tangon;
    michal = function() { // Original name: clearDeleteHistoryError
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearDeleteHistoryError'] = michal;
    return entity;
})();