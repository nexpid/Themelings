// app/modules/media_viewer/native/portraitThumbnailHelpers.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    mike = global;
    oscar = mike.Object;
    report = oscar.defineProperty;
    tango = {};
    mike = true;
    tango['value'] = mike;
    mike = '__esModule';
    mike = report.bind(oscar)(zulu, mike, tango);
    mike = {};
    tango = 'function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}';
    mike['code'] = tango;
    var _closure1_slot0 = mike;
    mike = function() {
        entity = function(argFoo, argBar) { // Original name: lerpVarWidthThumbnailScrollBounds
            _fun85493: for(var _fun85493_ip = 0; ; ) switch(_fun85493_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                tango = zulu.length;
                entity = 0;
                if(!(entity !== tango)) { _fun85493_ip = 156; continue _fun85493 }
 20:
                if(!(!(mike < entity))) { _fun85493_ip = 154; continue _fun85493 }
 27:
                tango = zulu.length;
                if(!(mike >= tango)) { _fun85493_ip = 41; continue _fun85493 }
 36:
                mike = zulu.length;
 41:
                tango = global;
                report = tango.Math;
                tango = report.floor;
                golf = tango.bind(report)(mike);
                report = mike - golf;
                mike = zulu.length;
                if(!(!(golf >= mike))) { _fun85493_ip = 130; continue _fun85493 }
 73:
                mike = zulu[golf];
                tango = mike.scrollStart;
                mike = zulu.length;
                oscar = 1;
                options = mike - oscar;
                mike = tango;
                if(!(golf < options)) { _fun85493_ip = 116; continue _fun85493 }
 102:
                oscar = golf + oscar;
                oscar = zulu[oscar];
                mike = oscar.scrollStart;
 116:
                mike = mike - tango;
                mike = report * mike;
                mike = tango + mike;
                return mike;
 130:
                tango = zulu.length;
                mike = 1;
                mike = tango - mike;
                mike = zulu[mike];
                mike = mike.scrollStart;
                return mike;
 154:
                return entity;
 156:
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 5256874583737.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot0;
        entity['__initData'] = mike;
        return entity;
    };
    entity = undefined;
    mike = mike.bind(entity)();
    report = argPlugh;
    tango = 0;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_viewer/native/portraitThumbnailHelpers.tsx';
    tango = report.bind(oscar)(tango);
    zulu['lerpVarWidthThumbnailScrollBounds'] = mike;
    return entity;
})();