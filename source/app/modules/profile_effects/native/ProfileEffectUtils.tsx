// app/modules/profile_effects/native/ProfileEffectUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_effects/native/ProfileEffectUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) {
        _fun79966: for(var _fun79966_ip = 0; ; ) switch(_fun79966_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            mike = entity.start;
            if(!(!(tango >= mike))) { _fun79966_ip = 19; continue _fun79966 }
 15:
            mike = false;
            return mike;
 19:
            mike = entity.loop;
            if(mike) { _fun79966_ip = 50; continue _fun79966 }
 28:
            zulu = entity.duration;
            mike = entity.start;
            mike = zulu + mike;
            if(!(tango > mike)) { _fun79966_ip = 50; continue _fun79966 }
 46:
            mike = false;
            return mike;
 50:
            mike = entity.loop;
            if(!mike) { _fun79966_ip = 131; continue _fun79966 }
 59:
            mike = entity.loopDelay;
            zulu = undefined;
            if(!(zulu !== mike)) { _fun79966_ip = 131; continue _fun79966 }
 71:
            report = entity.loopDelay;
            mike = 0;
            if(!(report > mike)) { _fun79966_ip = 131; continue _fun79966 }
 83:
            mike = entity.duration;
            report = null;
            report = report == entity;
            zulu = undefined;
            if(report) { _fun79966_ip = 105; continue _fun79966 }
 99:
            zulu = entity.loopDelay;
 105:
            zulu = mike + zulu;
            mike = entity.start;
            mike = tango - mike;
            mike = mike % zulu;
            entity = entity.duration;
            if(!(!(mike > entity))) { _fun79966_ip = 135; continue _fun79966 }
 131:
            entity = true;
            return entity;
 135:
            entity = false;
            return entity;
        }
    };
    zulu['shouldAnimate'] = tango;
    mike = function(argFoo, argBar) {
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getAssetWHRatio;
        entity = argFoo;
        mike = mike.bind(zulu)(entity);
        entity = argBar;
        entity = entity / mike;
        return entity;
    };
    zulu['calculateProfileEffectHeight'] = mike;
    return entity;
})();