// app/design/tokens/native/SemanticColorContext.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 5;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/tokens/native/SemanticColorContext.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getSemanticColorContextFromThemeContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            mike = report[mike];
            backup = undefined;
            tango = zulu.bind(backup)(mike);
            mike = tango.getGradientThemeFromFlags;
            verify = mike.bind(tango)(entity);
            options = entity.contrast;
            tango = entity.saturation;
            oscar = entity.primaryColor;
            mike = 4;
            mike = report[mike];
            report = zulu.bind(backup)(mike);
            zulu = report.getGradientThemeMetadata;
            mike = entity.gradient;
            mike = zulu.bind(report)(verify, mike);
            report = null;
            if(!(report != oscar)) { _fun00002_ip = 321; continue _fun00001 }
 96:
            foxtrot = entity.theme;
            zulu = entity.primaryColor;
            romeo = entity.secondaryColor;
            verify = report == zulu;
            entity = null;
            if(verify) { _fun00002_ip = 318; continue _fun00001 }
 126:
            yankee = _closure1_slot0;
            kilo = _closure1_slot2;
            verify = 0;
            offset = kilo[verify];
            sizing = yankee.bind(backup)(offset);
            offset = sizing.int2hex;
            offset = offset.bind(sizing)(zulu);
            verify = kilo[verify];
            yankee = yankee.bind(backup)(verify);
            verify = yankee.int2hex;
            if(!(report != romeo)) { _fun00002_ip = 178; continue _fun00001 }
 175:
            zulu = romeo;
 178:
            verify = verify.bind(yankee)(zulu);
            yankee = _closure1_slot1;
            kilo = _closure1_slot2;
            zulu = 1;
            zulu = kilo[zulu];
            zulu = yankee.bind(backup)(zulu);
            romeo = zulu.bind(backup)(offset);
            yankee = romeo.mix;
            zulu = 0.5;
            yankee = yankee.bind(romeo)(verify, zulu);
            zulu = yankee.hex;
            yankee = zulu.bind(yankee)();
            zulu = {};
            romeo = _closure1_slot0;
            golf = 2;
            golf = kilo[golf];
            romeo = romeo.bind(backup)(golf);
            golf = romeo.isThemeLight;
            romeo = golf.bind(romeo)(foxtrot);
            golf = 'dark';
            if(!romeo) { _fun00002_ip = 279; continue _fun00001 }
 275:
            golf = 'light';
 279:
            zulu['theme'] = golf;
            golf = {};
            golf['gradient.start'] = offset;
            golf['gradient.mid'] = yankee;
            golf['gradient.end'] = verify;
            golf['gradient.primary'] = offset;
            golf['gradient.secondary'] = verify;
            zulu['colors'] = golf;
            entity = zulu;
 318:
            mike = entity;
 321:
            entity = {};
            verify = report != oscar;
            zulu = 1;
            golf = zulu;
            if(verify) { _fun00002_ip = 339; continue _fun00001 }
 336:
            golf = options;
 339:
            entity['contrast'] = golf;
            report = report != oscar;
            if(report) { _fun00002_ip = 354; continue _fun00001 }
 351:
            zulu = tango;
 354:
            entity['saturation'] = zulu;
            entity['gradient'] = mike;
            return entity;
        }
    };
    zulu['getSemanticColorContextFromThemeContext'] = mike;
    return entity;
})();