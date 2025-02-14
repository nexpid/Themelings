// app/modules/messages/native/VisibleMessagesWindowHandler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo) { // Original name: getRowMessageId
        _fun89303: for(var _fun89303_ip = 0; ; ) switch(_fun89303_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike != entity)) { _fun89303_ip = 86; continue _fun89303 }
 9:
            zulu = 'rowType';
            zulu = zulu in entity;
            if(zulu) { _fun89303_ip = 63; continue _fun89303 }
 20:
            tango = entity.type;
            zulu = _closure1_slot1;
            zulu = zulu.MESSAGE;
            if(!(tango === zulu)) { _fun89303_ip = 86; continue _fun89303 }
 42:
            zulu = entity.message;
            tango = mike == zulu;
            mike = undefined;
            if(tango) { _fun89303_ip = 61; continue _fun89303 }
 56:
            mike = zulu.id;
 61:
            return mike;
 63:
            zulu = entity.rowType;
            mike = _closure1_slot1;
            mike = mike.MESSAGE;
            if(!(zulu !== mike)) { _fun89303_ip = 90; continue _fun89303 }
 86:
            mike = undefined;
            return mike;
 90:
            entity = entity.message;
            entity = entity.id;
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(mike);
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.RowType;
    var _closure1_slot1 = mike;
    mike = function() { // Original name: VisibleMessagesWindowHandler
        zulu = this;
        var _closure2_slot0 = zulu;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = undefined;
        tango = report.bind(entity)(zulu, tango);
        tango = null;
        zulu['data'] = tango;
        zulu['callback'] = tango;
        tango = function(argFoo) {
            _fun89305: for(var _fun89305_ip = 0; ; ) switch(_fun89305_ip) {
 0:
                mike = _closure2_slot0;
                zulu = argFoo;
                mike['callback'] = zulu;
                zulu = mike.data;
                mike = null;
                if(!(mike != zulu)) { _fun89305_ip = 47; continue _fun89305 }
 27:
                zulu = _closure2_slot0;
                mike = zulu.callback;
                entity = zulu.data;
                entity = mike.bind(zulu)(entity);
 47:
                entity = undefined;
                return entity;
            }
        };
        zulu['setCallback'] = tango;
        tango = function() {
            mike = _closure2_slot0;
            entity = null;
            mike['callback'] = entity;
            mike['data'] = entity;
            entity = undefined;
            return entity;
        };
        zulu['clearCallback'] = tango;
        mike = function(argFoo) {
            _fun89307: for(var _fun89307_ip = 0; ; ) switch(_fun89307_ip) {
 0:
                entity = argFoo;
                offset = entity.rows;
                oscar = entity.firstVisibleMessageIndex;
                zulu = entity.lastVisibleMessageIndex;
                mike = _closure2_slot0;
                mike = mike.callback;
                verify = null;
                if(!(verify != mike)) { _fun89307_ip = 312; continue _fun89307 }
 43:
                mike = verify != oscar;
                report = null;
                if(!mike) { _fun89307_ip = 97; continue _fun89307 }
 52:
                options = 0;
                yankee = oscar >= options;
                tango = undefined;
                mike = oscar;
                report = null;
                if(!yankee) { _fun89307_ip = 97; continue _fun89307 }
 71:
                romeo = _closure1_slot2;
                yankee = offset[mike];
                report = romeo.bind(tango)(yankee);
                if(!(verify == report)) { _fun89307_ip = 97; continue _fun89307 }
 88:
                mike = mike - 1;
                report = null;
                if(mike >= options) { _fun89307_ip = 71; continue _fun89307 }
 97:
                tango = verify != zulu;
                mike = null;
                if(!tango) { _fun89307_ip = 162; continue _fun89307 }
 106:
                tango = offset.length;
                tango = zulu < tango;
                options = undefined;
                golf = zulu;
                mike = null;
                if(!tango) { _fun89307_ip = 162; continue _fun89307 }
 128:
                romeo = _closure1_slot2;
                tango = offset[golf];
                mike = romeo.bind(options)(tango);
                if(!(verify == mike)) { _fun89307_ip = 162; continue _fun89307 }
 145:
                golf = golf + 1;
                tango = offset.length;
                tango = golf < tango;
                mike = null;
                if(tango) { _fun89307_ip = 128; continue _fun89307 }
 162:
                golf = verify != oscar;
                tango = null;
                if(!golf) { _fun89307_ip = 267; continue _fun89307 }
 171:
                golf = verify != zulu;
                tango = null;
                if(!golf) { _fun89307_ip = 267; continue _fun89307 }
 180:
                golf = global;
                options = golf.Math;
                golf = options.floor;
                yankee = zulu - oscar;
                zulu = 2;
                zulu = yankee / zulu;
                zulu = golf.bind(options)(zulu);
                options = oscar + zulu;
                zulu = offset.length;
                zulu = options < zulu;
                oscar = undefined;
                tango = null;
                if(!zulu) { _fun89307_ip = 267; continue _fun89307 }
 233:
                yankee = _closure1_slot2;
                zulu = offset[options];
                tango = yankee.bind(oscar)(zulu);
                if(!(verify == tango)) { _fun89307_ip = 267; continue _fun89307 }
 250:
                options = options + 1;
                zulu = offset.length;
                zulu = options < zulu;
                tango = null;
                if(zulu) { _fun89307_ip = 233; continue _fun89307 }
 267:
                zulu = _closure2_slot0;
                entity = {};
                entity['topVisibleMessage'] = report;
                entity['middleVisibleMessage'] = tango;
                entity['bottomVisibleMessage'] = mike;
                zulu['data'] = entity;
                mike = zulu.callback;
                entity = zulu.data;
                entity = mike.bind(zulu)(entity);
 312:
                entity = undefined;
                return entity;
            }
        };
        zulu['handleScrollPosition'] = mike;
        return entity;
    };
    var _closure1_slot3 = mike;
    mike = tango.bind(entity)(mike);
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/VisibleMessagesWindowHandler.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();