// app/modules/remixing/native/hooks/useOrientationLock.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
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
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Dimensions;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/hooks/useOrientationLock.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: usePortraitOrientationOnly
        tango = _closure1_slot2;
        zulu = tango.useEffect;
        mike = function() {
            _fun82119: for(var _fun82119_ip = 0; ; ) switch(_fun82119_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 2;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isIpadOS;
                mike = mike.bind(tango)();
                if(mike) { _fun82119_ip = 76; continue _fun82119 }
 38:
                mike = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 3;
                entity = tango[entity];
                tango = mike.bind(zulu)(entity);
                zulu = tango.lockOrientation;
                mike = 'PORTRAIT';
                entity = false;
                entity = zulu.bind(tango)(mike, entity);
 76:
                entity = function() {
                    _fun82120: for(var _fun82120_ip = 0; ; ) switch(_fun82120_ip) {
 0:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 2;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isIpadOS;
                        zulu = zulu.bind(tango)();
                        if(zulu) { _fun82120_ip = 78; continue _fun82120 }
 38:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot1;
                        mike = 3;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.unlockOrientation;
                        mike = {};
                        report = false;
                        mike['unlockAfterRotatingToPreviousLock'] = report;
                        mike = zulu.bind(tango)(mike);
 78:
                        return entity;
                    }
                };
                return entity;
            }
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['default'] = tango;
    mike = function() {
        _fun82121: for(var _fun82121_ip = 0; ; ) switch(_fun82121_ip) {
 0:
            zulu = _closure1_slot3;
            mike = zulu.get;
            entity = 'screen';
            entity = mike.bind(zulu)(entity);
            zulu = entity.width;
            mike = entity.height;
            tango = zulu > mike;
            entity = {};
            report = zulu;
            if(!tango) { _fun82121_ip = 46; continue _fun82121 }
 43:
            report = mike;
 46:
            entity['width'] = report;
            if(!tango) { _fun82121_ip = 56; continue _fun82121 }
 53:
            mike = zulu;
 56:
            entity['height'] = mike;
            return entity;
        }
    };
    zulu['getPortraitOrientationScreenSize'] = mike;
    return entity;
})();