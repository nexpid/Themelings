// app/components_native/common/FastImage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        tangon = function(argFoo) { // Original name: FastImageAndroid
            entity = argFoo;
            tangon = _closure1_slot2;
            zuuluu = _closure1_slot0;
            michal = {};
            golfie = michal;
            oscard = entity;
            report = copyDataProperties(golfie, oscard);
            report = entity.placeholder;
            entity = 'defaultSource';
            michal[entity] = report;
            report = 0;
            entity = 'fadeDuration';
            michal[entity] = report;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        michal = global;
        offset = michal.Object;
        verify = offset.defineProperty;
        option = {};
        entity = true;
        option['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zuuluu, entity, option);
        entity = 0;
        verify = oscard[entity];
        option = argCor;
        entity = undefined;
        offset = option.bind(entity)(verify);
        option = 1;
        option = oscard[option];
        option = report.bind(entity)(option);
        yankee = option.Image;
        var _closure1_slot0 = yankee;
        romeon = option.StyleSheet;
        option = option.NativeModules;
        var _closure1_slot1 = option;
        option = 2;
        option = oscard[option];
        option = report.bind(entity)(option);
        option = option.jsx;
        var _closure1_slot2 = option;
        verify = romeon.create;
        option = {};
        foxtra = {};
        backup = 'hidden';
        foxtra['overflow'] = backup;
        option['base'] = foxtra;
        option = verify.bind(romeon)(option);
        var _closure1_slot3 = option;
        option = 3;
        verify = oscard[option];
        option = argBaz;
        verify = option.bind(entity)(verify);
        option = {'componentName': 'DCDFastImageView', 'componentMissingFallbackInstance': null, 'warnWhenMissing': false};
        option['componentMissingFallbackInstance'] = yankee;
        option = verify.bind(entity)(option);
        var _closure1_slot4 = option;
        verify = offset.memo;
        option = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                entity = report.source;
                yankee = report.style;
                zuuluu = report.placeholder;
                michal = report.enableAnimation;
                tangon = undefined;
                verify = tangon === michal;
                if(verify) { _fun00004_ip = 37; continue _fun00003 }
 34:
                verify = michal;
 37:
                michal = report.fade;
                option = tangon === michal;
                if(option) { _fun00004_ip = 53; continue _fun00003 }
 50:
                option = michal;
 53:
                michal = report.usesSmallCache;
                golfie = tangon !== michal;
                if(!golfie) { _fun00004_ip = 69; continue _fun00003 }
 66:
                golfie = michal;
 69:
                michal = 'number';
                entity = typeof entity;
                if(!(michal !== entity)) { _fun00004_ip = 225; continue _fun00003 }
 83:
                offset = null;
                entity = offset != zuuluu;
                oscard = null;
                if(!entity) { _fun00004_ip = 112; continue _fun00003 }
 94:
                michal = _closure1_slot0;
                entity = michal.resolveAssetSource;
                oscard = entity.bind(michal)(zuuluu);
 112:
                zuuluu = _closure1_slot2;
                michal = _closure1_slot4;
                entity = {};
                kiloes = entity;
                backup = report;
                foxtra = copyDataProperties(kiloes, backup);
                romeon = _closure1_slot3;
                foxtra = romeon.base;
                romeon = new Array(2);
                romeon[0] = foxtra;
                romeon[1] = yankee;
                yankee = 'style';
                entity[yankee] = romeon;
                yankee = offset == oscard;
                offset = undefined;
                if(yankee) { _fun00004_ip = 181; continue _fun00003 }
 175:
                offset = oscard.uri;
 181:
                oscard = 'placeholder';
                entity[oscard] = offset;
                oscard = 'enableAnimation';
                entity[oscard] = verify;
                oscard = 'fade';
                entity[oscard] = option;
                oscard = 'usesSmallCache';
                entity[oscard] = golfie;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
 225:
                zuuluu = _closure1_slot2;
                michal = _closure1_slot0;
                entity = {};
                kiloes = entity;
                backup = report;
                report = copyDataProperties(kiloes, backup);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        offset = verify.bind(offset)(option);
        verify = michal.Object;
        option = verify.assign;
        michal = {};
        yankee = function(argFoo) { // Original name: preload
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = global;
            zuuluu = report.Promise;
            michal = zuuluu.race;
            golfie = report.Promise;
            entity = golfie.prototype;
            oscard = Object.create(entity, {constructor: {value: golfie}});
            option = function(argFoo) {
                entity = _closure1_slot1;
                tangon = entity.DCDFastImageViewManager;
                zuuluu = tangon.preload;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            verify = oscard;
            entity = new verify[golfie](option, golfie);
            oscard = entity instanceof Object ? entity : oscard;
            entity = new Array(2);
            entity[0] = oscard;
            oscard = report.Promise;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            option = function(argFoo) {
                entity = global;
                tangon = entity.setTimeout;
                zuuluu = undefined;
                michal = argFoo;
                entity = 2000;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            verify = report;
            tangon = new verify[oscard](option, golfie);
            tangon = tangon instanceof Object ? tangon : report;
            entity[1] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['preload'] = yankee;
        michal = option.bind(verify)(offset, michal);
        golfie = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = zuuluu.prefetch;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.catch;
            entity = function() {
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        tangon['preload'] = golfie;
        golfie = 4;
        golfie = oscard[golfie];
        option = report.bind(entity)(golfie);
        golfie = option.isAndroid;
        golfie = golfie.bind(option)();
        if(!golfie) { _fun00002_ip = 277; continue _fun00001 }
 274:
        michal = tangon;
 277:
        tangon = 5;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'components_native/common/FastImage.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();