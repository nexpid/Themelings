// app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'width': '100%', 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center'};
    offset = 4;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_SURFACE_RAISED;
    verify['backgroundColor'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AppLauncherBooleanOption
        entity = argFoo;
        offset = entity.style;
        golfie = entity.option;
        michal = entity.initialValue;
        var _closure2_slot0 = michal;
        michal = entity.onPress;
        var _closure2_slot1 = michal;
        option = entity.hasError;
        michal = _closure1_slot5;
        tangon = undefined;
        verify = michal.bind(tangon)();
        oscard = _closure1_slot3;
        zuuluu = oscard.useState;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00002_ip = 33; continue _fun00001 }
 16:
                zuuluu = _closure2_slot0;
                tangon = zuuluu.type;
                zuuluu = 'text';
                entity = zuuluu === tangon;
 33:
                if(!entity) { _fun00002_ip = 53; continue _fun00001 }
 36:
                michal = _closure2_slot0;
                zuuluu = michal.text;
                michal = 'true';
                entity = michal === zuuluu;
 53:
                return entity;
            }
        };
        oscard = zuuluu.bind(oscard)(michal);
        zuuluu = _closure1_slot2;
        michal = 2;
        zuuluu = zuuluu.bind(tangon)(oscard, michal);
        michal = 0;
        oscard = zuuluu[michal];
        var _closure2_slot2 = oscard;
        michal = 1;
        michal = zuuluu[michal];
        var _closure2_slot3 = michal;
        zuuluu = _closure1_slot4;
        michal = _closure1_slot0;
        yankee = _closure1_slot1;
        entity = 5;
        entity = yankee[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.FormCheckboxRow;
        entity = {'start': true, 'end': true};
        yankee = verify.container;
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = offset;
        entity['style'] = verify;
        entity['hasError'] = option;
        golfie = golfie.displayName;
        entity['label'] = golfie;
        entity['selected'] = oscard;
        report = function() { // Original name: onPress
            report = _closure2_slot3;
            michal = _closure2_slot2;
            tangon = !michal;
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            zuuluu = _closure2_slot1;
            michal = !michal;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['onPress'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();