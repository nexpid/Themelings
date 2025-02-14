// app/modules/stickers/StickerMessagePreviewStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun56957: for(var _fun56957_ip = 0; ; ) switch(_fun56957_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun56957_ip = 51; continue _fun56957 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun56957_ip = 92; continue _fun56957;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun56957_ip = 71; continue _fun56957 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun56958: for(var _fun56958_ip = 0; ; ) switch(_fun56958_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun56958_ip = 74; continue _fun56958;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.DraftType;
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: StickerMessagePreviewStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'getStickerPreview';
        report['key'] = oscar;
        entity = function(argFoo, argBar) { // Original name: value
            _fun56963: for(var _fun56963_ip = 0; ; ) switch(_fun56963_ip) {
 0:
                mike = _closure1_slot5;
                zulu = mike.FirstThreadMessage;
                mike = argBar;
                if(!(mike !== zulu)) { _fun56963_ip = 26; continue _fun56963 }
 20:
                mike = _closure1_slot6;
                _fun56963_ip = 30; continue _fun56963;
 26:
                mike = _closure1_slot7;
 30:
                entity = argFoo;
                entity = mike[entity];
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'StickerMessagePreviewStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleAddStickerPreview
        _fun56964: for(var _fun56964_ip = 0; ; ) switch(_fun56964_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = entity.sticker;
            report = entity.draftType;
            mike = _closure1_slot5;
            mike = mike.FirstThreadMessage;
            if(!(report !== mike)) { _fun56964_ip = 43; continue _fun56964 }
 37:
            mike = _closure1_slot6;
            _fun56964_ip = 47; continue _fun56964;
 43:
            mike = _closure1_slot7;
 47:
            entity = new Array(1);
            entity[0] = tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['ADD_STICKER_PREVIEW'] = verify;
    verify = function(argFoo) { // Original name: handleClearStickerPreview
        _fun56965: for(var _fun56965_ip = 0; ; ) switch(_fun56965_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            tango = entity.draftType;
            entity = _closure1_slot5;
            entity = entity.FirstThreadMessage;
            if(!(tango !== entity)) { _fun56965_ip = 37; continue _fun56965 }
 31:
            entity = _closure1_slot6;
            _fun56965_ip = 41; continue _fun56965;
 37:
            entity = _closure1_slot7;
 41:
            tango = entity[mike];
            zulu = null;
            if(!(zulu != tango)) { _fun56965_ip = 55; continue _fun56965 }
 51:
            entity = delete entity[mike];
 55:
            entity = undefined;
            return entity;
        }
    };
    mike['CLEAR_STICKER_PREVIEW'] = verify;
    tango = function() { // Original name: resetState
        entity = {};
        _closure1_slot6 = entity;
        entity = {};
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stickers/StickerMessagePreviewStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();