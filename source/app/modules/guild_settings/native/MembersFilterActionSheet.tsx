// app/modules/guild_settings/native/MembersFilterActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    romeon = 4;
    tangon = oscard[romeon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 7;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtra;
    tangon['background'] = verify;
    verify = {'marginVertical': 8, 'borderRadius': null, 'overflow': 'hidden'};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.lg;
    verify['borderRadius'] = foxtra;
    tangon['listView'] = verify;
    verify = {};
    foxtra = 12;
    verify['marginHorizontal'] = foxtra;
    tangon['listViewRedesign'] = verify;
    verify = {};
    verify['marginEnd'] = romeon;
    tangon['roleDot'] = verify;
    verify = {};
    romeon = 'row';
    verify['flexDirection'] = romeon;
    tangon['labelContainer'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.INTERACTIVE_NORMAL;
    verify['color'] = offset;
    tangon['label'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/native/MembersFilterActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: MembersFilterActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.guild;
            var _closure2_slot0 = michal;
            zuuluu = entity.selectedRoleId;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00002_ip = 49; continue _fun00001 }
 26:
            report = _closure1_slot7;
            michal = report.getProps;
            michal = michal.bind(report)();
            zuuluu = michal.selectedRoleId;
 49:
            var _closure2_slot1 = zuuluu;
            report = entity.onFilterRoleId;
            var _closure2_slot2 = report;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            entity = _closure1_slot10;
            yankee = entity.bind(tangon)();
            _closure2_slot3 = yankee;
            option = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 8;
            oscard = backup[entity];
            romeon = option.bind(tangon)(oscard);
            verify = romeon.useStateFromStores;
            oscard = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getRoles;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = verify.bind(romeon)(golfie, oscard);
            verify = _closure1_slot1;
            oscard = 9;
            oscard = backup[oscard];
            oscard = verify.bind(tangon)(oscard);
            verify = oscard.bind(tangon)(golfie);
            golfie = verify.sortBy;
            oscard = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                entity = -entity;
                return entity;
            };
            verify = golfie.bind(verify)(oscard);
            golfie = verify.map;
            oscard = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.id;
                entity['value'] = zuuluu;
                report = entity;
                tangon = michal;
                michal = copyDataProperties(report, tangon);
                return entity;
            };
            golfie = golfie.bind(verify)(oscard);
            oscard = golfie.value;
            foxtra = oscard.bind(golfie)();
            oscard = foxtra.length;
            romeon = 1;
            verify = oscard - romeon;
            golfie = foxtra.unshift;
            oscard = foxtra.splice;
            verify = oscard.bind(foxtra)(verify, romeon);
            oscard = 0;
            oscard = verify[oscard];
            oscard = golfie.bind(foxtra)(oscard);
            golfie = _closure1_slot3;
            verify = golfie.useCallback;
            oscard = new Array(2);
            oscard[0] = report;
            oscard[1] = zuuluu;
            report = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot1;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 115; continue _fun00003 }
 14:
                    tangon = _closure2_slot2;
                    michal = null;
                    if(!(michal == tangon)) { _fun00004_ip = 62; continue _fun00003 }
 24:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 10;
                    tangon = tangon[michal];
                    michal = undefined;
                    tangon = report.bind(michal)(tangon);
                    michal = tangon.selectRole;
                    michal = michal.bind(tangon)(zuuluu);
                    _fun00004_ip = 73; continue _fun00003;
 62:
                    michal = _closure2_slot2;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 73:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    entity = 'MembersFilter';
                    entity = michal.bind(zuuluu)(entity);
 115:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = verify.bind(golfie)(report, oscard);
            _closure2_slot4 = kiloes;
            entity = backup[entity];
            verify = option.bind(tangon)(entity);
            oscard = verify.useStateFromStores;
            entity = _closure1_slot5;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            verify = oscard.bind(verify)(report, entity);
            _closure2_slot5 = verify;
            oscard = golfie.useContext;
            entity = 12;
            report = backup[entity];
            report = option.bind(tangon)(report);
            report = report.RedesignCompatContext;
            romeon = oscard.bind(golfie)(report);
            oscard = golfie.useCallback;
            report = new Array(4);
            report[0] = kiloes;
            report[1] = verify;
            report[2] = zuuluu;
            report[3] = yankee;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    kiloes = entity.item;
                    var _closure3_slot0 = kiloes;
                    tangon = _closure1_slot9;
                    zuuluu = _closure1_slot4;
                    michal = {};
                    yankee = _closure1_slot8;
                    option = _closure1_slot0;
                    entity = _closure1_slot2;
                    verify = 13;
                    report = entity[verify];
                    entity = undefined;
                    report = option.bind(entity)(report);
                    offset = report.FormRow;
                    report = {};
                    option = {};
                    romeon = _closure2_slot3;
                    romeon = romeon.labelContainer;
                    option['style'] = romeon;
                    foxtra = _closure2_slot5;
                    romeon = 'dot';
                    foxtra = romeon === foxtra;
                    if(!foxtra) { _fun00006_ip = 107; continue _fun00005 }
 95:
                    sizing = kiloes.colorString;
                    romeon = null;
                    foxtra = romeon != sizing;
 107:
                    if(!foxtra) { _fun00006_ip = 183; continue _fun00005 }
 110:
                    output = _closure1_slot8;
                    sizing = _closure1_slot0;
                    result = _closure1_slot2;
                    romeon = 14;
                    romeon = result[romeon];
                    romeon = sizing.bind(entity)(romeon);
                    sizing = romeon.RoleDot;
                    romeon = {};
                    result = _closure2_slot3;
                    result = result.roleDot;
                    romeon['containerStyles'] = result;
                    result = kiloes.colorString;
                    romeon['color'] = result;
                    result = kiloes.colorStrings;
                    romeon['colors'] = result;
                    foxtra = output.bind(entity)(sizing, romeon);
 183:
                    romeon = new Array(2);
                    romeon[0] = foxtra;
                    output = _closure1_slot8;
                    sizing = _closure1_slot0;
                    result = _closure1_slot2;
                    foxtra = 15;
                    foxtra = result[foxtra];
                    foxtra = sizing.bind(entity)(foxtra);
                    sizing = foxtra.Text;
                    foxtra = {};
                    result = 'text-md/medium';
                    foxtra['variant'] = result;
                    result = _closure2_slot3;
                    echoed = result.label;
                    result = new Array(2);
                    result[0] = echoed;
                    echoed = kiloes.colorString;
                    ctrled = null;
                    update = ctrled != echoed;
                    echoed = null;
                    if(!update) { _fun00006_ip = 293; continue _fun00005 }
 264:
                    source = _closure2_slot5;
                    update = 'username';
                    echoed = null;
                    if(!(update === source)) { _fun00006_ip = 293; continue _fun00005 }
 278:
                    update = {};
                    source = kiloes.colorString;
                    update['color'] = source;
                    echoed = update;
 293:
                    result[1] = echoed;
                    foxtra['style'] = result;
                    result = kiloes.name;
                    foxtra['children'] = result;
                    foxtra = output.bind(entity)(sizing, foxtra);
                    romeon[1] = foxtra;
                    option['children'] = romeon;
                    option = tangon.bind(entity)(zuuluu, option);
                    report['label'] = option;
                    golfie = function() { // Original name: onPress
                        zuuluu = _closure2_slot4;
                        entity = _closure3_slot0;
                        michal = entity.id;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report['onPress'] = golfie;
                    option = _closure1_slot8;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    romeon = oscard[verify];
                    romeon = golfie.bind(entity)(romeon);
                    romeon = romeon.FormRow;
                    foxtra = romeon.Radio;
                    romeon = {};
                    kiloes = kiloes.id;
                    backup = _closure2_slot1;
                    backup = kiloes === backup;
                    romeon['selected'] = backup;
                    romeon = option.bind(entity)(foxtra, romeon);
                    report['trailing'] = romeon;
                    offset = yankee.bind(entity)(offset, report);
                    report = new Array(2);
                    report[0] = offset;
                    oscard = oscard[verify];
                    oscard = golfie.bind(entity)(oscard);
                    golfie = oscard.FormDivider;
                    oscard = {};
                    verify = true;
                    oscard['outer'] = verify;
                    oscard = option.bind(entity)(golfie, oscard);
                    report[1] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            verify = oscard.bind(golfie)(zuuluu, report);
            zuuluu = _closure1_slot8;
            entity = backup[entity];
            entity = option.bind(tangon)(entity);
            michal = entity.RedesignCompat;
            entity = {};
            report = 16;
            report = backup[report];
            report = option.bind(tangon)(report);
            oscard = report.ActionSheet;
            report = {};
            golfie = true;
            report['scrollable'] = golfie;
            golfie = 17;
            golfie = backup[golfie];
            golfie = option.bind(tangon)(golfie);
            kiloes = golfie.BottomSheetTitleHeader;
            golfie = {};
            sizing = 18;
            output = backup[sizing];
            output = option.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = backup[sizing];
            sizing = option.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.pEasFR;
            sizing = output.bind(result)(sizing);
            golfie['title'] = sizing;
            golfie = zuuluu.bind(tangon)(kiloes, golfie);
            report['header'] = golfie;
            golfie = 19;
            golfie = backup[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.BottomSheetFlatList;
            golfie = {};
            golfie['data'] = foxtra;
            offset = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            golfie['keyExtractor'] = offset;
            golfie['renderItem'] = verify;
            offset = yankee.listView;
            verify = new Array(2);
            verify[0] = offset;
            offset = undefined;
            if(!romeon) { _fun00002_ip = 589; continue _fun00001 }
 583:
            offset = yankee.listViewRedesign;
 589:
            verify[1] = offset;
            golfie['contentContainerStyle'] = verify;
            verify = 10;
            golfie['initialNumToRender'] = verify;
            verify = false;
            golfie['removeClippedSubviews'] = verify;
            golfie = zuuluu.bind(tangon)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();