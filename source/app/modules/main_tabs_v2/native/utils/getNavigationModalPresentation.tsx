// app/modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    _fun81770: for(var _fun81770_ip = 0; ; ) switch(_fun81770_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscar;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, tango);
        tango = {};
        golf = 0;
        options = oscar[golf];
        entity = undefined;
        verify = report.bind(entity)(options);
        options = verify.isAndroid;
        options = options.bind(verify)();
        if(options) { _fun81770_ip = 115; continue _fun81770 }
 78:
        options = 2;
        options = oscar[options];
        verify = report.bind(entity)(options);
        options = verify.isIpadOS;
        verify = options.bind(verify)();
        options = 'modal';
        if(!verify) { _fun81770_ip = 113; continue _fun81770 }
 107:
        options = 'fullScreenModal';
 113:
        _fun81770_ip = 153; continue _fun81770;
 115:
        verify = 1;
        verify = oscar[verify];
        offset = report.bind(entity)(verify);
        verify = offset.getIsWindowLarge;
        offset = verify.bind(offset)();
        verify = 'modal';
        if(!offset) { _fun81770_ip = 150; continue _fun81770 }
 144:
        verify = 'fullScreenModal';
 150:
        options = verify;
 153:
        tango['presentation'] = options;
        golf = oscar[golf];
        options = report.bind(entity)(golf);
        golf = options.isAndroid;
        golf = golf.bind(options)();
        golf = !golf;
        tango['lockOrientation'] = golf;
        var _closure1_slot2 = tango;
        tango = 4;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx';
        tango = report.bind(oscar)(tango);
        mike = function() { // Original name: getNavigationModalPresentation
            _fun81771: for(var _fun81771_ip = 0; ; ) switch(_fun81771_ip) {
 0:
                entity = arguments[0];
                oscar = undefined;
                if(!(entity === oscar)) { _fun81771_ip = 16; continue _fun81771 }
 9:
                entity = _closure1_slot2;
 16:
                mike = entity.presentation;
                if(!(mike === oscar)) { _fun81771_ip = 39; continue _fun81771 }
 26:
                zulu = _closure1_slot2;
                mike = zulu.presentation;
 39:
                zulu = entity.lockOrientation;
                if(!(zulu === oscar)) { _fun81771_ip = 78; continue _fun81771 }
 49:
                entity = _closure1_slot2;
                entity = entity.lockOrientation;
                if(!entity) { _fun81771_ip = 75; continue _fun81771 }
 65:
                tango = 'transparentModal';
                entity = tango !== mike;
 75:
                zulu = entity;
 78:
                entity = {};
                entity['presentation'] = mike;
                mike = undefined;
                if(!zulu) { _fun81771_ip = 161; continue _fun81771 }
 90:
                tango = _closure1_slot0;
                golf = _closure1_slot1;
                zulu = 3;
                report = golf[zulu];
                options = tango.bind(oscar)(report);
                report = options.getOrientation;
                report = report.bind(options)();
                zulu = golf[zulu];
                zulu = tango.bind(oscar)(zulu);
                zulu = zulu.OrientationType;
                tango = zulu.PORTRAIT;
                zulu = 'landscape';
                if(!(report === tango)) { _fun81771_ip = 158; continue _fun81771 }
 152:
                zulu = 'portrait';
 158:
                mike = zulu;
 161:
                entity['orientation'] = mike;
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();