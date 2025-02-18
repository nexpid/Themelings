// app/modules/content_inventory/friendlist/native/FriendListInventory.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ContentInventoryFeedKey;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'width': '100%', 'marginBottom': 12, 'backgroundColor': 'transparent'};
    tangon['friendListInventory'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/content_inventory/friendlist/native/FriendListInventory.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot8;
            report = undefined;
            golfie = michal.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            option = zuuluu.bind(report)(michal);
            tangon = option.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getFeed;
                entity = _closure1_slot6;
                entity = entity.GLOBAL_FEED;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = tangon.bind(option)(zuuluu, michal);
            tangon = _closure1_slot3;
            zuuluu = tangon.useCallback;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = entity.item;
                    verify = entity.index;
                    entity = michal.content;
                    tangon = entity.content_type;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 7;
                    entity = report[entity];
                    oscard = undefined;
                    entity = zuuluu.bind(oscard)(entity);
                    entity = entity.ContentInventoryEntryType;
                    zuuluu = entity.PLAYED_GAME;
                    entity = null;
                    if(!(tangon === zuuluu)) { _fun00004_ip = 139; continue _fun00003 }
 67:
                    report = _closure1_slot7;
                    tangon = _closure1_slot4;
                    zuuluu = {};
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 8;
                    golfie = offset[golfie];
                    option = option.bind(oscard)(golfie);
                    golfie = {};
                    offset = michal.content;
                    golfie['content'] = offset;
                    golfie['index'] = verify;
                    golfie = report.bind(oscard)(option, golfie);
                    zuuluu['children'] = golfie;
                    michal = michal.content;
                    michal = michal.id;
                    entity = report.bind(oscard)(tangon, zuuluu, michal);
 139:
                    return entity;
                }
            };
            entity = new Array(0);
            option = zuuluu.bind(tangon)(michal, entity);
            zuuluu = null;
            michal = zuuluu == yankee;
            entity = null;
            if(michal) { _fun00002_ip = 238; continue _fun00001 }
 105:
            michal = yankee.entries;
            tangon = michal.length;
            michal = 1;
            michal = tangon < michal;
            entity = null;
            if(michal) { _fun00002_ip = 238; continue _fun00001 }
 128:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot4;
            michal = {};
            golfie = golfie.friendListInventory;
            michal['style'] = golfie;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 9;
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            golfie = oscard.FlashList;
            oscard = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            yankee = yankee.entries;
            oscard['data'] = yankee;
            oscard['renderItem'] = option;
            option = 8;
            option = offset[option];
            option = verify.bind(report)(option);
            option = option.TILE_WIDTH;
            oscard['estimatedItemSize'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 238:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();