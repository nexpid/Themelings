// app/modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.DirectoryEntryCategories;
    var _closure1_slot8 = golfie;
    tangon = tangon.getHubCategories;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 7;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = offset;
    offset = 12;
    verify['paddingTop'] = offset;
    tangon['categoriesListWrapper'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        entity = argFoo;
        golfie = entity.channel;
        var _closure2_slot0 = golfie;
        michal = entity.onCategorySelected;
        var _closure2_slot1 = michal;
        sizing = entity.categoryCounts;
        var _closure2_slot2 = sizing;
        michal = entity.allEntriesCount;
        var _closure2_slot3 = michal;
        entity = _closure1_slot12;
        tangon = undefined;
        romeon = entity.bind(tangon)();
        foxtra = _closure1_slot5;
        entity = foxtra.useState;
        zuuluu = 0;
        option = entity.bind(foxtra)(zuuluu);
        oscard = _closure1_slot4;
        entity = 2;
        oscard = oscard.bind(tangon)(option, entity);
        verify = oscard[zuuluu];
        entity = 1;
        entity = oscard[entity];
        var _closure2_slot4 = entity;
        option = foxtra.useCallback;
        oscard = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            zuuluu = entity.width;
            michal = _closure2_slot4;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        entity = new Array(0);
        option = option.bind(foxtra)(oscard, entity);
        oscard = _closure1_slot0;
        yankee = _closure1_slot3;
        entity = 11;
        entity = yankee[entity];
        output = oscard.bind(tangon)(entity);
        kiloes = output.useStateFromStores;
        entity = _closure1_slot7;
        backup = new Array(1);
        backup[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentCategoryId;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = kiloes.bind(output)(backup, entity);
        var _closure2_slot5 = entity;
        kiloes = foxtra.useMemo;
        golfie = golfie.id;
        backup = new Array(1);
        backup[0] = golfie;
        golfie = function() {
            entity = _closure2_slot0;
            tangon = entity.id;
            report = {};
            entity = _closure1_slot8;
            entity = entity.ALL;
            report['value'] = entity;
            option = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 8;
            oscard = verify[entity];
            zuuluu = undefined;
            oscard = option.bind(zuuluu)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            entity = verify[entity];
            entity = option.bind(zuuluu)(entity);
            entity = entity.t;
            entity = entity.hEAa2d;
            entity = oscard.bind(golfie)(entity);
            report['label'] = entity;
            entity = 70;
            report['idealSize'] = entity;
            entity = new Array(1);
            entity[0] = report;
            michal = _closure1_slot9;
            yankee = michal.bind(zuuluu)(tangon);
            offset = 1;
            romeon = entity;
            michal = arraySpread(romeon, yankee, offset);
            return entity;
        };
        kiloes = kiloes.bind(foxtra)(golfie, backup);
        var _closure2_slot6 = kiloes;
        backup = foxtra.useMemo;
        golfie = new Array(3);
        golfie[0] = kiloes;
        golfie[1] = sizing;
        golfie[2] = michal;
        michal = function() {
            zuuluu = _closure2_slot6;
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    entity = {};
                    michal = zuuluu.label;
                    entity['label'] = michal;
                    michal = global;
                    report = michal.String;
                    tangon = zuuluu.value;
                    michal = undefined;
                    tangon = report.bind(michal)(tangon);
                    entity['id'] = tangon;
                    report = zuuluu.value;
                    tangon = _closure1_slot8;
                    tangon = tangon.ALL;
                    if(!(report !== tangon)) { _fun00002_ip = 93; continue _fun00001 }
 60:
                    oscard = _closure2_slot2;
                    report = null;
                    report = report == oscard;
                    michal = undefined;
                    if(report) { _fun00002_ip = 91; continue _fun00001 }
 78:
                    tangon = _closure2_slot2;
                    zuuluu = zuuluu.value;
                    michal = tangon[zuuluu];
 91:
                    _fun00002_ip = 100; continue _fun00001;
 93:
                    michal = _closure2_slot3;
 100:
                    entity['count'] = michal;
                    michal = null;
                    entity['page'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        backup = backup.bind(foxtra)(michal, golfie);
        golfie = foxtra.useMemo;
        michal = new Array(2);
        michal[0] = kiloes;
        michal[1] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot6;
                michal = zuuluu.findIndex;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.value;
                    entity = _closure2_slot5;
                    entity = michal === entity;
                    return entity;
                };
                michal = michal.bind(zuuluu)(entity);
                zuuluu = -1;
                entity = 0;
                if(!(zuuluu !== michal)) { _fun00004_ip = 42; continue _fun00003 }
 39:
                entity = michal;
 42:
                return entity;
            }
        };
        foxtra = golfie.bind(foxtra)(entity, michal);
        entity = 12;
        entity = yankee[entity];
        golfie = oscard.bind(tangon)(entity);
        michal = golfie.useSegmentedControlState;
        entity = {};
        entity['items'] = backup;
        entity['defaultIndex'] = foxtra;
        offset = function(argFoo) { // Original name: onSetActiveIndex
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot6;
                entity = argFoo;
                zuuluu = zuuluu[entity];
                entity = null;
                tangon = entity == zuuluu;
                entity = undefined;
                oscard = undefined;
                if(tangon) { _fun00006_ip = 32; continue _fun00005 }
 27:
                oscard = zuuluu.value;
 32:
                zuuluu = _closure2_slot5;
                if(!(oscard !== zuuluu)) { _fun00006_ip = 92; continue _fun00005 }
 40:
                tangon = _closure1_slot2;
                report = _closure1_slot3;
                zuuluu = 13;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.selectDirectoryCategory;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                zuuluu = tangon.bind(report)(zuuluu, oscard);
                michal = _closure2_slot1;
                michal = michal.bind(entity)();
 92:
                return entity;
            }
        };
        entity['onSetActiveIndex'] = offset;
        entity['pageWidth'] = verify;
        offset = michal.bind(golfie)(entity);
        entity = 9;
        entity = yankee[entity];
        verify = oscard.bind(tangon)(entity);
        michal = verify.useToken;
        golfie = _closure1_slot1;
        entity = 7;
        entity = yankee[entity];
        entity = golfie.bind(tangon)(entity);
        entity = entity.colors;
        entity = entity.BACKGROUND_PRIMARY;
        michal = michal.bind(verify)(entity);
        verify = new Array(2);
        verify[0] = michal;
        entity = 10;
        entity = yankee[entity];
        entity = golfie.bind(tangon)(entity);
        michal = entity.bind(tangon)(michal);
        entity = michal.alpha;
        michal = entity.bind(michal)(zuuluu);
        entity = michal.hex;
        entity = entity.bind(michal)();
        verify[1] = entity;
        zuuluu = _closure1_slot11;
        michal = _closure1_slot6;
        entity = {};
        romeon = romeon.categoriesListWrapper;
        entity['style'] = romeon;
        entity['onLayout'] = option;
        option = _closure1_slot10;
        report = 14;
        report = yankee[report];
        report = oscard.bind(tangon)(report);
        oscard = report.Tabs;
        report = {};
        report['state'] = offset;
        oscard = option.bind(tangon)(oscard, report);
        report = new Array(2);
        report[0] = oscard;
        oscard = 15;
        oscard = yankee[oscard];
        golfie = golfie.bind(tangon)(oscard);
        oscard = {};
        oscard['state'] = offset;
        oscard['colors'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();