// app/components_native/common/FastImage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        tango = function(argFoo) { // Original name: FastImageAndroid
            entity = argFoo;
            tango = _closure1_slot2;
            zulu = _closure1_slot0;
            mike = {};
            golf = mike;
            oscar = entity;
            report = copyDataProperties(golf, oscar);
            report = entity.placeholder;
            entity = 'defaultSource';
            mike[entity] = report;
            report = 0;
            entity = 'fadeDuration';
            mike[entity] = report;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        mike = global;
        offset = mike.Object;
        verify = offset.defineProperty;
        options = {};
        entity = true;
        options['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zulu, entity, options);
        entity = 0;
        verify = oscar[entity];
        options = argCorge;
        entity = undefined;
        offset = options.bind(entity)(verify);
        options = 1;
        options = oscar[options];
        options = report.bind(entity)(options);
        yankee = options.Image;
        var _closure1_slot0 = yankee;
        romeo = options.StyleSheet;
        options = options.NativeModules;
        var _closure1_slot1 = options;
        options = 2;
        options = oscar[options];
        options = report.bind(entity)(options);
        options = options.jsx;
        var _closure1_slot2 = options;
        verify = romeo.create;
        options = {};
        foxtrot = {};
        backup = 'hidden';
        foxtrot['overflow'] = backup;
        options['base'] = foxtrot;
        options = verify.bind(romeo)(options);
        var _closure1_slot3 = options;
        options = 3;
        verify = oscar[options];
        options = argBaz;
        verify = options.bind(entity)(verify);
        options = {'componentName': 'DCDFastImageView', 'componentMissingFallbackInstance': null, 'warnWhenMissing': false};
        options['componentMissingFallbackInstance'] = yankee;
        options = verify.bind(entity)(options);
        var _closure1_slot4 = options;
        verify = offset.memo;
        options = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                entity = report.source;
                yankee = report.style;
                zulu = report.placeholder;
                mike = report.enableAnimation;
                tango = undefined;
                verify = tango === mike;
                if(verify) { _fun00004_ip = 37; continue _fun00003 }
 34:
                verify = mike;
 37:
                mike = report.fade;
                options = tango === mike;
                if(options) { _fun00004_ip = 53; continue _fun00003 }
 50:
                options = mike;
 53:
                mike = report.usesSmallCache;
                golf = tango !== mike;
                if(!golf) { _fun00004_ip = 69; continue _fun00003 }
 66:
                golf = mike;
 69:
                mike = 'number';
                entity = typeof entity;
                if(!(mike !== entity)) { _fun00004_ip = 225; continue _fun00003 }
 83:
                offset = null;
                entity = offset != zulu;
                oscar = null;
                if(!entity) { _fun00004_ip = 112; continue _fun00003 }
 94:
                mike = _closure1_slot0;
                entity = mike.resolveAssetSource;
                oscar = entity.bind(mike)(zulu);
 112:
                zulu = _closure1_slot2;
                mike = _closure1_slot4;
                entity = {};
                kilo = entity;
                backup = report;
                foxtrot = copyDataProperties(kilo, backup);
                romeo = _closure1_slot3;
                foxtrot = romeo.base;
                romeo = new Array(2);
                romeo[0] = foxtrot;
                romeo[1] = yankee;
                yankee = 'style';
                entity[yankee] = romeo;
                yankee = offset == oscar;
                offset = undefined;
                if(yankee) { _fun00004_ip = 181; continue _fun00003 }
 175:
                offset = oscar.uri;
 181:
                oscar = 'placeholder';
                entity[oscar] = offset;
                oscar = 'enableAnimation';
                entity[oscar] = verify;
                oscar = 'fade';
                entity[oscar] = options;
                oscar = 'usesSmallCache';
                entity[oscar] = golf;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
 225:
                zulu = _closure1_slot2;
                mike = _closure1_slot0;
                entity = {};
                kilo = entity;
                backup = report;
                report = copyDataProperties(kilo, backup);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        offset = verify.bind(offset)(options);
        verify = mike.Object;
        options = verify.assign;
        mike = {};
        yankee = function(argFoo) { // Original name: preload
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = global;
            zulu = report.Promise;
            mike = zulu.race;
            golf = report.Promise;
            entity = golf.prototype;
            oscar = Object.create(entity, {constructor: {value: golf}});
            options = function(argFoo) {
                entity = _closure1_slot1;
                tango = entity.DCDFastImageViewManager;
                zulu = tango.preload;
                mike = _closure2_slot0;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            verify = oscar;
            entity = new verify[golf](options, golf);
            oscar = entity instanceof Object ? entity : oscar;
            entity = new Array(2);
            entity[0] = oscar;
            oscar = report.Promise;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            options = function(argFoo) {
                entity = global;
                tango = entity.setTimeout;
                zulu = undefined;
                mike = argFoo;
                entity = 2000;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            verify = report;
            tango = new verify[oscar](options, golf);
            tango = tango instanceof Object ? tango : report;
            entity[1] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['preload'] = yankee;
        mike = options.bind(verify)(offset, mike);
        golf = function(argFoo) {
            zulu = _closure1_slot0;
            mike = zulu.prefetch;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.catch;
            entity = function() {
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango['preload'] = golf;
        golf = 4;
        golf = oscar[golf];
        options = report.bind(entity)(golf);
        golf = options.isAndroid;
        golf = golf.bind(options)();
        if(!golf) { _fun00002_ip = 277; continue _fun00001 }
 274:
        mike = tango;
 277:
        tango = 5;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'components_native/common/FastImage.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();