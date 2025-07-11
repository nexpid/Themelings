// app/modules/status_bar/native/components/StatusBarManager.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusBar;
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: StatusBarManager
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = new Array(0);
            zuuluu['propsStack'] = michal;
            michal = null;
            zuuluu['updateImmediate'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'pushStackEntry';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            michal = argFoo;
            zuuluu = this;
            entity = {};
            tangon = michal.hidden;
            entity['hidden'] = tangon;
            michal = michal.barStyle;
            entity['barStyle'] = michal;
            tangon = zuuluu.propsStack;
            michal = tangon.push;
            michal = michal.bind(tangon)(entity);
            michal = zuuluu.updatePropsStack;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'popStackEntry';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = argFoo;
                michal = this;
                entity = null;
                zuuluu = entity != oscard;
                entity = -1;
                report = entity;
                if(!zuuluu) { _fun00002_ip = 41; continue _fun00001 }
 24:
                tangon = michal.propsStack;
                zuuluu = tangon.indexOf;
                report = zuuluu.bind(tangon)(oscard);
 41:
                if(!(entity !== report)) { _fun00002_ip = 76; continue _fun00001 }
 45:
                tangon = michal.propsStack;
                zuuluu = tangon.splice;
                entity = 1;
                entity = zuuluu.bind(tangon)(report, entity);
                entity = michal.updatePropsStack;
                entity = entity.bind(michal)();
 76:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'replaceStackEntry';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                golfie = argFoo;
                michal = argBar;
                zuuluu = this;
                entity = {};
                tangon = michal.hidden;
                entity['hidden'] = tangon;
                michal = michal.barStyle;
                entity['barStyle'] = michal;
                michal = null;
                report = michal != golfie;
                michal = -1;
                tangon = michal;
                if(!report) { _fun00004_ip = 68; continue _fun00003 }
 51:
                oscard = zuuluu.propsStack;
                report = oscard.indexOf;
                tangon = report.bind(oscard)(golfie);
 68:
                if(!(michal !== tangon)) { _fun00004_ip = 82; continue _fun00003 }
 72:
                michal = zuuluu.propsStack;
                michal[tangon] = entity;
 82:
                michal = zuuluu.updatePropsStack;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'updatePropsStack';
        entity['key'] = oscard;
        report = function() { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            tangon = global;
            oscard = tangon.clearImmediate;
            report = zuuluu.updateImmediate;
            entity = undefined;
            report = oscard.bind(entity)(report);
            tangon = tangon.setImmediate;
            michal = function() {
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                michal = report[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(michal);
                oscard = golfie.merge;
                michal = new Array(1);
                option = {'hidden': false, 'barStyle': 'default'};
                michal[0] = option;
                option = _closure3_slot0;
                yankee = option.propsStack;
                offset = 1;
                romeon = michal;
                option = arraySpread(romeon, yankee, offset);
                romeon = oscard;
                yankee = michal;
                offset = golfie;
                michal = apply(romeon, yankee, offset);
                golfie = michal.barStyle;
                michal = michal.hidden;
                oscard = _closure1_slot4;
                zuuluu = oscard.setBarStyle;
                zuuluu = zuuluu.bind(oscard)(golfie);
                zuuluu = 4;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.setStatusBarVisible;
                michal = !michal;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = tangon.bind(entity)(michal);
            zuuluu['updateImmediate'] = michal;
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/status_bar/native/components/StatusBarManager.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();