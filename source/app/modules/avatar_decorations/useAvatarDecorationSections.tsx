// app/modules/avatar_decorations/useAvatarDecorationSections.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    tango = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = verify;
    entity = global;
    golf = entity.Object;
    report = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = verify[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = verify[mike];
    mike = options.bind(entity)(mike);
    mike = mike.useMemo;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = verify[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = verify[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = verify[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    report = {};
    mike = 'purchase';
    report['PURCHASE'] = mike;
    mike = 'premium_purchase';
    report['PREMIUM_PURCHASE'] = mike;
    mike = 'preview';
    report['PREVIEW'] = mike;
    mike = 'premium_preview';
    report['PREMIUM_PREVIEW'] = mike;
    var _closure1_slot8 = report;
    tango = {};
    mike = 'None';
    tango['id'] = mike;
    var _closure1_slot9 = tango;
    mike = {};
    golf = 'Shop';
    mike['id'] = golf;
    var _closure1_slot10 = mike;
    golf = 9;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/avatar_decorations/useAvatarDecorationSections.tsx';
    golf = options.bind(verify)(golf);
    oscar = function() { // Original name: _default
        golf = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 5;
        report = options[zulu];
        tango = undefined;
        offset = golf.bind(tango)(report);
        verify = offset.useStateFromStores;
        report = _closure1_slot7;
        oscar = new Array(1);
        oscar[0] = report;
        report = function() {
            mike = _closure1_slot7;
            entity = mike.getCurrentUser;
            entity = entity.bind(mike)();
            return entity;
        };
        verify = verify.bind(offset)(oscar, report);
        oscar = _closure1_slot1;
        report = 6;
        report = options[report];
        oscar = oscar.bind(tango)(report);
        report = oscar.canUseCollectibles;
        report = report.bind(oscar)(verify);
        var _closure2_slot0 = report;
        oscar = options[zulu];
        yankee = golf.bind(tango)(oscar);
        offset = yankee.useStateFromStores;
        oscar = _closure1_slot6;
        verify = new Array(1);
        verify[0] = oscar;
        oscar = function() {
            entity = _closure1_slot6;
            entity = entity.purchases;
            return entity;
        };
        oscar = offset.bind(yankee)(verify, oscar);
        var _closure2_slot1 = oscar;
        zulu = options[zulu];
        verify = golf.bind(tango)(zulu);
        options = verify.useStateFromStoresArray;
        zulu = _closure1_slot5;
        golf = new Array(1);
        golf[0] = zulu;
        zulu = function() {
            mike = _closure1_slot5;
            zulu = mike.categories;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.products;
            entity[1] = mike;
            return entity;
        };
        options = options.bind(verify)(golf, zulu);
        golf = _closure1_slot3;
        zulu = 2;
        golf = golf.bind(tango)(options, zulu);
        zulu = 0;
        options = golf[zulu];
        var _closure2_slot2 = options;
        zulu = 1;
        golf = golf[zulu];
        var _closure2_slot3 = golf;
        zulu = _closure1_slot4;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                yankee = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 7;
                mike = zulu[mike];
                options = undefined;
                oscar = yankee.bind(options)(mike);
                report = oscar.getAvatarDecorations;
                tango = _closure2_slot1;
                mike = _closure2_slot2;
                oscar = report.bind(oscar)(tango, mike);
                report = oscar.reduce;
                tango = {};
                mike = new Array(0);
                tango['purchase'] = mike;
                mike = new Array(0);
                tango['premium_purchase'] = mike;
                mike = new Array(0);
                tango['preview'] = mike;
                mike = new Array(0);
                tango['premium_preview'] = mike;
                mike = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        tango = argBar;
                        oscar = _closure2_slot1;
                        report = oscar.get;
                        zulu = tango.skuId;
                        options = report.bind(oscar)(zulu);
                        verify = _closure1_slot0;
                        report = _closure1_slot2;
                        golf = 7;
                        report = report[golf];
                        oscar = undefined;
                        verify = verify.bind(oscar)(report);
                        report = verify.isPremiumCollectiblesPurchase;
                        report = report.bind(verify)(options);
                        verify = report;
                        if(!verify) { _fun00004_ip = 88; continue _fun00003 }
 71:
                        offset = entity.premium_purchase;
                        yankee = offset.length;
                        offset = 0;
                        verify = offset === yankee;
 88:
                        if(!verify) { _fun00004_ip = 113; continue _fun00003 }
 91:
                        verify = entity.premium_preview;
                        entity['premium_purchase'] = verify;
                        verify = new Array(0);
                        entity['premium_preview'] = verify;
 113:
                        if(report) { _fun00004_ip = 262; continue _fun00003 }
 119:
                        report = null;
                        if(!(report == options)) { _fun00004_ip = 244; continue _fun00003 }
 125:
                        report = _closure2_slot0;
                        if(report) { _fun00004_ip = 226; continue _fun00003 }
 132:
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        zulu = zulu[golf];
                        report = report.bind(oscar)(zulu);
                        zulu = report.isPremiumCollectiblesProduct;
                        golf = _closure2_slot3;
                        oscar = golf.get;
                        mike = tango.skuId;
                        mike = oscar.bind(golf)(mike);
                        mike = zulu.bind(report)(mike);
                        if(!mike) { _fun00004_ip = 226; continue _fun00003 }
 183:
                        mike = entity.premium_purchase;
                        zulu = mike.length;
                        mike = 0;
                        if(!(!(zulu > mike))) { _fun00004_ip = 208; continue _fun00003 }
 200:
                        zulu = entity.premium_preview;
                        _fun00004_ip = 214; continue _fun00003;
 208:
                        zulu = entity.premium_purchase;
 214:
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
                        _fun00004_ip = 278; continue _fun00003;
 226:
                        zulu = entity.preview;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
                        _fun00004_ip = 278; continue _fun00003;
 244:
                        zulu = entity.purchase;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
                        _fun00004_ip = 278; continue _fun00003;
 262:
                        zulu = entity.premium_purchase;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 278:
                        return entity;
                    }
                };
                oscar = report.bind(oscar)(mike, tango);
                mike = {};
                tango = _closure1_slot8;
                tango = tango.PURCHASE;
                mike['section'] = tango;
                report = _closure1_slot9;
                tango = new Array(2);
                tango[0] = report;
                report = _closure1_slot10;
                tango[1] = report;
                kilo = oscar.purchase;
                backup = 2;
                sizing = tango;
                report = arraySpread(sizing, kilo, backup);
                mike['items'] = tango;
                report = 12;
                mike['height'] = report;
                verify = 8;
                tango = zulu[verify];
                tango = yankee.bind(options)(tango);
                golf = tango.intl;
                tango = golf.string;
                zulu = zulu[verify];
                zulu = yankee.bind(options)(zulu);
                zulu = zulu.t;
                zulu = zulu.JEimX1;
                zulu = tango.bind(golf)(zulu);
                mike['header'] = zulu;
                zulu = new Array(3);
                zulu[0] = mike;
                mike = {};
                tango = oscar.premium_purchase;
                tango = tango.length;
                golf = 0;
                if(!(!(tango > golf))) { _fun00002_ip = 259; continue _fun00001 }
 247:
                tango = _closure1_slot8;
                tango = tango.PREMIUM_PREVIEW;
                _fun00002_ip = 269; continue _fun00001;
 259:
                yankee = _closure1_slot8;
                tango = yankee.PREMIUM_PURCHASE;
 269:
                mike['section'] = tango;
                tango = oscar.premium_purchase;
                tango = tango.length;
                if(!(!(tango > golf))) { _fun00002_ip = 296; continue _fun00001 }
 288:
                tango = oscar.premium_preview;
                _fun00002_ip = 302; continue _fun00001;
 296:
                tango = oscar.premium_purchase;
 302:
                mike['items'] = tango;
                mike['height'] = report;
                golf = _closure1_slot0;
                tango = _closure1_slot2;
                yankee = tango[verify];
                yankee = golf.bind(options)(yankee);
                foxtrot = yankee.intl;
                romeo = foxtrot.string;
                yankee = tango[verify];
                yankee = golf.bind(options)(yankee);
                yankee = yankee.t;
                yankee = yankee.DIJLzM;
                yankee = romeo.bind(foxtrot)(yankee);
                mike['header'] = yankee;
                zulu[1] = mike;
                mike = {};
                offset = _closure1_slot8;
                offset = offset.PREVIEW;
                mike['section'] = offset;
                oscar = oscar.preview;
                mike['items'] = oscar;
                mike['height'] = report;
                report = tango[verify];
                report = golf.bind(options)(report);
                oscar = report.intl;
                report = oscar.string;
                tango = tango[verify];
                tango = golf.bind(options)(tango);
                tango = tango.t;
                tango = tango.fmIfaG;
                tango = report.bind(oscar)(tango);
                mike['header'] = tango;
                zulu[2] = mike;
                mike = zulu.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.items;
                    mike = entity.length;
                    entity = 0;
                    entity = mike > entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = oscar;
    zulu['Section'] = report;
    zulu['NONE_ITEM'] = tango;
    zulu['SHOP_ITEM'] = mike;
    return entity;
})();