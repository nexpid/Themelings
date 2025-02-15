// app/modules/content_inventory/friendlist/native/FriendListInventory.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ContentInventoryFeedKey;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'width': '100%', 'marginBottom': 12, 'backgroundColor': 'transparent'};
    tango['friendListInventory'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/content_inventory/friendlist/native/FriendListInventory.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot8;
            report = undefined;
            golf = mike.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            options = zulu.bind(report)(mike);
            tango = options.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot5;
                mike = zulu.getFeed;
                entity = _closure1_slot6;
                entity = entity.GLOBAL_FEED;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = tango.bind(options)(zulu, mike);
            tango = _closure1_slot3;
            zulu = tango.useCallback;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    mike = entity.item;
                    verify = entity.index;
                    entity = mike.content;
                    tango = entity.content_type;
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 7;
                    entity = report[entity];
                    oscar = undefined;
                    entity = zulu.bind(oscar)(entity);
                    entity = entity.ContentInventoryEntryType;
                    zulu = entity.PLAYED_GAME;
                    entity = null;
                    if(!(tango === zulu)) { _fun00004_ip = 139; continue _fun00003 }
 67:
                    report = _closure1_slot7;
                    tango = _closure1_slot4;
                    zulu = {};
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    golf = 8;
                    golf = offset[golf];
                    options = options.bind(oscar)(golf);
                    golf = {};
                    offset = mike.content;
                    golf['content'] = offset;
                    golf['index'] = verify;
                    golf = report.bind(oscar)(options, golf);
                    zulu['children'] = golf;
                    mike = mike.content;
                    mike = mike.id;
                    entity = report.bind(oscar)(tango, zulu, mike);
 139:
                    return entity;
                }
            };
            entity = new Array(0);
            options = zulu.bind(tango)(mike, entity);
            zulu = null;
            mike = zulu == yankee;
            entity = null;
            if(mike) { _fun00002_ip = 242; continue _fun00001 }
 105:
            mike = yankee.entries;
            tango = mike.length;
            mike = 1;
            mike = tango < mike;
            entity = null;
            if(mike) { _fun00002_ip = 242; continue _fun00001 }
 128:
            tango = _closure1_slot7;
            zulu = _closure1_slot4;
            mike = {};
            golf = golf.friendListInventory;
            mike['style'] = golf;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 9;
            oscar = offset[oscar];
            oscar = verify.bind(report)(oscar);
            golf = oscar.FlashList;
            oscar = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            yankee = yankee.entries;
            oscar['data'] = yankee;
            oscar['renderItem'] = options;
            options = 8;
            options = offset[options];
            options = verify.bind(report)(options);
            options = options.TILE_WIDTH;
            oscar['estimatedItemSize'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 242:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();