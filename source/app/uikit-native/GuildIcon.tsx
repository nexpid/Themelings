// app/uikit-native/GuildIcon.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    backup = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = option;
    sizing = function(argFoo) { // Original name: makeSizeStyle
        zuuluu = argFoo;
        entity = {};
        entity['width'] = zuuluu;
        entity['height'] = zuuluu;
        michal = 3;
        michal = zuuluu / michal;
        entity['borderRadius'] = michal;
        return entity;
    };
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getGuildIconSource
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = argCor;
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 21; continue _fun00001 }
 12:
            michal = report.icon;
            if(!(entity == michal)) { _fun00002_ip = 41; continue _fun00001 }
 21:
            michal = entity != zuuluu;
            entity = null;
            if(!michal) { _fun00002_ip = 39; continue _fun00001 }
 30:
            michal = {};
            michal['uri'] = zuuluu;
            entity = michal;
 39:
            _fun00002_ip = 70; continue _fun00001;
 41:
            tangon = report.getIconSource;
            zuuluu = _closure1_slot8;
            michal = argBar;
            zuuluu = zuuluu[michal];
            michal = argBaz;
            entity = tangon.bind(report)(zuuluu, michal);
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: coerceStableAsset
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = global;
            michal = entity.Array;
            entity = michal.isArray;
            entity = entity.bind(michal)(tangon);
            michal = null;
            if(entity) { _fun00004_ip = 59; continue _fun00003 }
 26:
            zuuluu = michal != tangon;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 57; continue _fun00003 }
 35:
            oscard = 'number';
            report = typeof tangon;
            zuuluu = tangon;
            if(!(oscard !== report)) { _fun00004_ip = 54; continue _fun00003 }
 49:
            zuuluu = tangon.uri;
 54:
            entity = zuuluu;
 57:
            _fun00004_ip = 82; continue _fun00003;
 59:
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 79; continue _fun00003 }
 74:
            michal = zuuluu.uri;
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    oscard = entity.Object;
    tangon = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(oscard)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = backup.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    tangon = option[michal];
    michal = argCor;
    verify = michal.bind(entity)(tangon);
    var _closure1_slot4 = verify;
    michal = 2;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    kiloes = michal.Fonts;
    michal = 3;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot5 = michal;
    tangon = {};
    michal = 'XXXSMALL';
    tangon['XXXSMALL'] = michal;
    michal = 'XXSMALL_12';
    tangon['XXSMALL_12'] = michal;
    michal = 'XXSMALL';
    tangon['XXSMALL'] = michal;
    michal = 'XSMALL_20';
    tangon['XSMALL_20'] = michal;
    michal = 'XSMALL';
    tangon['XSMALL'] = michal;
    michal = 'SMALL';
    tangon['SMALL'] = michal;
    michal = 'SMALL_32';
    tangon['SMALL_32'] = michal;
    michal = 'SMALL_36';
    tangon['SMALL_36'] = michal;
    michal = 'NORMAL';
    tangon['NORMAL'] = michal;
    michal = 'LARGE';
    tangon['LARGE'] = michal;
    michal = 'XLARGE';
    tangon['XLARGE'] = michal;
    michal = 'XXLARGE';
    tangon['XXLARGE'] = michal;
    var _closure1_slot6 = tangon;
    michal = {};
    offset = tangon.XXXSMALL;
    oscard = [6, 4, 4, 4, 2, 1];
    michal[offset] = oscard;
    offset = tangon.XXSMALL_12;
    oscard = [8, 6, 6, 4, 4, 2];
    michal[offset] = oscard;
    offset = tangon.XXSMALL;
    oscard = [10, 8, 8, 6, 6, 4];
    michal[offset] = oscard;
    offset = tangon.XSMALL_20;
    oscard = [12, 10, 10, 8, 8, 6];
    michal[offset] = oscard;
    offset = tangon.XSMALL;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.SMALL;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.SMALL_32;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.SMALL_36;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.NORMAL;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.LARGE;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.XLARGE;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    offset = tangon.XXLARGE;
    oscard = [16, 16, 16, 14, 14, 12];
    michal[offset] = oscard;
    var _closure1_slot7 = michal;
    michal = {};
    oscard = tangon.XXXSMALL;
    record = 10;
    michal[oscard] = record;
    oscard = tangon.XXSMALL_12;
    config = 12;
    michal[oscard] = config;
    oscard = tangon.XXSMALL;
    sequen = 16;
    michal[oscard] = sequen;
    oscard = tangon.XSMALL_20;
    vacuum = 20;
    michal[oscard] = vacuum;
    oscard = tangon.XSMALL;
    ctrled = 24;
    michal[oscard] = ctrled;
    oscard = tangon.SMALL;
    source = 30;
    michal[oscard] = source;
    oscard = tangon.SMALL_32;
    update = 32;
    michal[oscard] = update;
    oscard = tangon.SMALL_36;
    echoed = 36;
    michal[oscard] = echoed;
    oscard = tangon.NORMAL;
    result = 40;
    michal[oscard] = result;
    oscard = tangon.LARGE;
    output = 48;
    michal[oscard] = output;
    oscard = tangon.XLARGE;
    foxtra = 64;
    michal[oscard] = foxtra;
    oscard = tangon.XXLARGE;
    romeon = 80;
    michal[oscard] = romeon;
    var _closure1_slot8 = michal;
    oscard = 4;
    oscard = option[oscard];
    yankee = golfie.bind(entity)(oscard);
    offset = yankee.createStyles;
    oscard = {};
    cntext = {'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    oscard['guildIcon'] = cntext;
    cntext = tangon.XXXSMALL;
    record = sizing.bind(entity)(record);
    oscard[cntext] = record;
    record = tangon.XXSMALL_12;
    config = sizing.bind(entity)(config);
    oscard[record] = config;
    config = tangon.XXSMALL;
    sequen = sizing.bind(entity)(sequen);
    oscard[config] = sequen;
    sequen = tangon.XSMALL_20;
    vacuum = sizing.bind(entity)(vacuum);
    oscard[sequen] = vacuum;
    vacuum = tangon.XSMALL;
    ctrled = sizing.bind(entity)(ctrled);
    oscard[vacuum] = ctrled;
    ctrled = tangon.SMALL;
    source = sizing.bind(entity)(source);
    oscard[ctrled] = source;
    source = tangon.SMALL_32;
    update = sizing.bind(entity)(update);
    oscard[source] = update;
    update = tangon.SMALL_36;
    echoed = sizing.bind(entity)(echoed);
    oscard[update] = echoed;
    echoed = tangon.NORMAL;
    result = sizing.bind(entity)(result);
    oscard[echoed] = result;
    result = tangon.LARGE;
    output = sizing.bind(entity)(output);
    oscard[result] = output;
    output = tangon.XLARGE;
    foxtra = sizing.bind(entity)(foxtra);
    oscard[output] = foxtra;
    foxtra = tangon.XXLARGE;
    romeon = sizing.bind(entity)(romeon);
    oscard[foxtra] = romeon;
    sizing = {};
    romeon = 5;
    foxtra = option[romeon];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BRAND;
    sizing['backgroundColor'] = foxtra;
    foxtra = 'guildTextContainer';
    oscard[foxtra] = sizing;
    sizing = {};
    foxtra = option[romeon];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_SECONDARY;
    sizing['backgroundColor'] = foxtra;
    foxtra = 'guildTextContainerInactive';
    oscard[foxtra] = sizing;
    sizing = {};
    foxtra = option[romeon];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_PRIMARY;
    sizing['backgroundColor'] = foxtra;
    foxtra = 'guildTextContainerInactiveNested';
    oscard[foxtra] = sizing;
    sizing = {};
    foxtra = option[romeon];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.INTERACTIVE_NORMAL;
    sizing['color'] = foxtra;
    foxtra = kiloes.PRIMARY_SEMIBOLD;
    sizing['fontFamily'] = foxtra;
    foxtra = 'guildText';
    oscard[foxtra] = sizing;
    foxtra = {};
    kiloes = kiloes.PRIMARY_SEMIBOLD;
    foxtra['fontFamily'] = kiloes;
    romeon = option[romeon];
    romeon = backup.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.WHITE;
    foxtra['color'] = romeon;
    romeon = 'guildTextActive';
    oscard[romeon] = foxtra;
    foxtra = {};
    romeon = 'transparent';
    foxtra['backgroundColor'] = romeon;
    romeon = 'guildTextContainerInactiveAlt';
    oscard[romeon] = foxtra;
    oscard = offset.bind(yankee)(oscard);
    var _closure1_slot9 = oscard;
    oscard = verify.memo;
    report = function(argFoo) { // Original name: GuildIconInner
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guild;
            var _closure2_slot0 = zuuluu;
            config = entity.icon;
            report = undefined;
            if(!(config === report)) { _fun00006_ip = 27; continue _fun00005 }
 25:
            config = null;
 27:
            var _closure2_slot1 = config;
            cntext = entity.animate;
            if(!(cntext === report)) { _fun00006_ip = 43; continue _fun00005 }
 41:
            cntext = false;
 43:
            var _closure2_slot2 = cntext;
            kiloes = entity.loadingStyle;
            update = entity.size;
            if(!(update === report)) { _fun00006_ip = 75; continue _fun00005 }
 62:
            tangon = _closure1_slot6;
            update = tangon.NORMAL;
 75:
            var _closure2_slot3 = update;
            offset = entity.selected;
            var _closure2_slot4 = offset;
            tangon = entity.TABS_altDefaultBackground;
            if(!(tangon === report)) { _fun00006_ip = 101; continue _fun00005 }
 99:
            tangon = false;
 101:
            golfie = entity.nested;
            if(!(golfie === report)) { _fun00006_ip = 113; continue _fun00005 }
 111:
            golfie = false;
 113:
            verify = entity.textStyle;
            var _closure2_slot5 = verify;
            output = entity.preloadAnimation;
            var _closure2_slot6 = output;
            option = entity.value;
            if(!(option === report)) { _fun00006_ip = 148; continue _fun00005 }
 144:
            option = '';
 148:
            source = entity.style;
            var _closure2_slot7 = source;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            entity = _closure1_slot9;
            echoed = entity.bind(report)();
            _closure2_slot8 = echoed;
            entity = _closure1_slot10;
            whisks = undefined;
            limora = zuuluu;
            sierra = update;
            status = cntext;
            target = config;
            entity = whisks[entity](limora, sierra, status, target, papara);
            result = _closure1_slot4;
            yankee = result.useRef;
            sizing = yankee.bind(result)(entity);
            _closure2_slot9 = sizing;
            romeon = result.useState;
            yankee = {};
            yankee = romeon.bind(result)(yankee);
            backup = _closure1_slot3;
            foxtra = 2;
            yankee = backup.bind(report)(yankee, foxtra);
            ctrled = 1;
            yankee = yankee[ctrled];
            _closure2_slot10 = yankee;
            romeon = result.useState;
            yankee = false;
            romeon = romeon.bind(result)(yankee);
            romeon = backup.bind(report)(romeon, foxtra);
            foxtra = 0;
            backup = romeon[foxtra];
            romeon = romeon[ctrled];
            _closure2_slot11 = romeon;
            foxtra = result.useRef;
            romeon = true;
            foxtra = foxtra.bind(result)(romeon);
            _closure2_slot12 = foxtra;
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            foxtra = 7;
            foxtra = vacuum[foxtra];
            foxtra = result.bind(report)(foxtra);
            sizing = foxtra.bind(report)(sizing);
            result = _closure1_slot11;
            foxtra = result.bind(report)(sizing);
            sequen = result.bind(report)(entity);
            record = foxtra !== sequen;
            _closure2_slot13 = record;
            foxtra = !record;
            if(!record) { _fun00006_ip = 410; continue _fun00005 }
 393:
            result = output;
            if(!result) { _fun00006_ip = 407; continue _fun00005 }
 399:
            vacuum = 'string';
            result = vacuum === sequen;
 407:
            foxtra = result;
 410:
            foxtra = !foxtra;
            _closure2_slot14 = foxtra;
            sequen = _closure1_slot4;
            papara = sequen.useEffect;
            vacuum = function() {
                entity = function() {
                    michal = _closure2_slot12;
                    entity = false;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            result = new Array(0);
            result = papara.bind(sequen)(vacuum, result);
            vacuum = sequen.useEffect;
            result = new Array(7);
            result[0] = foxtra;
            result[1] = cntext;
            result[2] = record;
            result[3] = zuuluu;
            result[4] = config;
            result[5] = output;
            result[6] = update;
            output = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    verify = _closure1_slot10;
                    foxtra = _closure2_slot0;
                    romeon = _closure2_slot3;
                    yankee = _closure2_slot2;
                    offset = _closure2_slot1;
                    entity = undefined;
                    backup = undefined;
                    zuuluu = backup[verify](foxtra, romeon, yankee, offset, verify);
                    var _closure3_slot0 = zuuluu;
                    oscard = _closure1_slot11;
                    golfie = oscard.bind(entity)(zuuluu);
                    oscard = _closure2_slot14;
                    if(oscard) { _fun00008_ip = 129; continue _fun00007 }
 56:
                    oscard = _closure2_slot13;
                    if(!oscard) { _fun00008_ip = 129; continue _fun00007 }
 63:
                    oscard = _closure2_slot6;
                    if(!oscard) { _fun00008_ip = 129; continue _fun00007 }
 70:
                    option = 'string';
                    oscard = typeof golfie;
                    if(!(option === oscard)) { _fun00008_ip = 129; continue _fun00007 }
 81:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 8;
                    report = option[report];
                    oscard = oscard.bind(entity)(report);
                    report = oscard.preload;
                    oscard = report.bind(oscard)(golfie);
                    report = oscard.then;
                    tangon = function() {
                        entity = global;
                        tangon = entity.setTimeout;
                        entity = undefined;
                        zuuluu = function() {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                michal = _closure2_slot12;
                                michal = michal.current;
                                if(!michal) { _fun00010_ip = 45; continue _fun00009 }
 15:
                                zuuluu = _closure2_slot9;
                                michal = _closure3_slot0;
                                zuuluu['current'] = michal;
                                zuuluu = _closure2_slot10;
                                michal = undefined;
                                entity = {};
                                entity = zuuluu.bind(michal)(entity);
 45:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = 0;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    _fun00008_ip = 146; continue _fun00007;
 129:
                    tangon = _closure2_slot13;
                    if(!tangon) { _fun00008_ip = 146; continue _fun00007 }
 136:
                    michal = _closure2_slot9;
                    michal['current'] = zuuluu;
 146:
                    return entity;
                }
            };
            output = vacuum.bind(sequen)(output, result);
            if(!foxtra) { _fun00006_ip = 495; continue _fun00005 }
 492:
            sizing = entity;
 495:
            foxtra = null;
            entity = foxtra == sizing;
            _closure2_slot15 = entity;
            result = undefined;
            if(entity) { _fun00006_ip = 527; continue _fun00005 }
 510:
            result = undefined;
            if(backup) { _fun00006_ip = 527; continue _fun00005 }
 515:
            backup = foxtra == kiloes;
            result = undefined;
            if(backup) { _fun00006_ip = 527; continue _fun00005 }
 524:
            result = kiloes;
 527:
            _closure2_slot16 = result;
            output = undefined;
            if(!entity) { _fun00006_ip = 579; continue _fun00005 }
 536:
            output = undefined;
            if(!(yankee === offset)) { _fun00006_ip = 579; continue _fun00005 }
 542:
            if(golfie) { _fun00006_ip = 568; continue _fun00005 }
 545:
            if(tangon) { _fun00006_ip = 558; continue _fun00005 }
 548:
            tangon = echoed.guildTextContainerInactive;
            _fun00006_ip = 566; continue _fun00005;
 558:
            tangon = echoed.guildTextContainerInactiveAlt;
 566:
            _fun00006_ip = 576; continue _fun00005;
 568:
            tangon = echoed.guildTextContainerInactiveNested;
 576:
            output = tangon;
 579:
            _closure2_slot17 = output;
            if(!(foxtra == zuuluu)) { _fun00006_ip = 620; continue _fun00005 }
 587:
            golfie = _closure1_slot0;
            backup = _closure1_slot2;
            tangon = 6;
            tangon = backup[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.getAcronym;
            option = tangon.bind(golfie)(option);
            _fun00006_ip = 626; continue _fun00005;
 620:
            option = zuuluu.acronym;
 626:
            backup = undefined;
            if(!entity) { _fun00006_ip = 677; continue _fun00005 }
 631:
            zuuluu = _closure1_slot7;
            golfie = zuuluu[update];
            tangon = undefined;
            if(!(report !== option)) { _fun00006_ip = 654; continue _fun00005 }
 645:
            zuuluu = option.length;
            tangon = golfie[zuuluu];
 654:
            zuuluu = golfie.length;
            zuuluu = zuuluu - ctrled;
            zuuluu = golfie[zuuluu];
            if(!(foxtra != tangon)) { _fun00006_ip = 674; continue _fun00005 }
 671:
            zuuluu = tangon;
 674:
            backup = zuuluu;
 677:
            _closure2_slot18 = backup;
            golfie = _closure1_slot4;
            tangon = golfie.useMemo;
            zuuluu = new Array(9);
            zuuluu[0] = source;
            zuuluu[1] = update;
            zuuluu[2] = echoed;
            zuuluu[3] = result;
            zuuluu[4] = output;
            zuuluu[5] = backup;
            zuuluu[6] = offset;
            zuuluu[7] = verify;
            zuuluu[8] = entity;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot8;
                    entity = entity.guildIcon;
                    michal = new Array(3);
                    michal[0] = entity;
                    zuuluu = _closure2_slot8;
                    entity = _closure2_slot3;
                    entity = zuuluu[entity];
                    michal[1] = entity;
                    entity = _closure2_slot7;
                    michal[2] = entity;
                    entity = _closure2_slot16;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00012_ip = 69; continue _fun00011 }
 55:
                    report = michal.push;
                    entity = _closure2_slot16;
                    entity = report.bind(michal)(entity);
 69:
                    entity = _closure2_slot15;
                    if(!entity) { _fun00012_ip = 99; continue _fun00011 }
 76:
                    report = michal.unshift;
                    entity = _closure2_slot8;
                    entity = entity.guildTextContainer;
                    entity = report.bind(michal)(entity);
 99:
                    entity = _closure2_slot17;
                    if(!(zuuluu != entity)) { _fun00012_ip = 121; continue _fun00011 }
 107:
                    zuuluu = michal.push;
                    entity = _closure2_slot17;
                    entity = zuuluu.bind(michal)(entity);
 121:
                    entity = {};
                    zuuluu = function() { // Original name: handleLoaded
                        zuuluu = _closure2_slot11;
                        michal = undefined;
                        entity = true;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    entity['handleLoaded'] = zuuluu;
                    entity['wrapperStyle'] = michal;
                    zuuluu = _closure2_slot15;
                    michal = undefined;
                    if(!zuuluu) { _fun00012_ip = 219; continue _fun00011 }
 149:
                    report = _closure2_slot4;
                    zuuluu = false;
                    if(!(zuuluu !== report)) { _fun00012_ip = 173; continue _fun00011 }
 159:
                    zuuluu = _closure2_slot8;
                    report = zuuluu.guildTextActive;
                    _fun00012_ip = 185; continue _fun00011;
 173:
                    zuuluu = _closure2_slot8;
                    report = zuuluu.guildText;
 185:
                    zuuluu = new Array(3);
                    zuuluu[0] = report;
                    report = {};
                    oscard = _closure2_slot18;
                    report['fontSize'] = oscard;
                    zuuluu[1] = report;
                    tangon = _closure2_slot5;
                    zuuluu[2] = tangon;
                    michal = zuuluu;
 219:
                    entity['textComponentStyle'] = michal;
                    return entity;
                }
            };
            michal = tangon.bind(golfie)(michal, zuuluu);
            backup = michal.handleLoaded;
            golfie = michal.wrapperStyle;
            verify = michal.textComponentStyle;
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            if(entity) { _fun00006_ip = 831; continue _fun00005 }
 774:
            entity = 8;
            entity = offset[entity];
            michal = zuuluu.bind(report)(entity);
            entity = {};
            entity['style'] = golfie;
            entity['source'] = sizing;
            kiloes = foxtra != kiloes;
            foxtra = undefined;
            if(!kiloes) { _fun00006_ip = 808; continue _fun00005 }
 805:
            foxtra = backup;
 808:
            entity['onLoadEnd'] = foxtra;
            entity['progressiveRenderingEnabled'] = romeon;
            entity['fade'] = yankee;
            entity = tangon.bind(report)(michal, entity);
            _fun00006_ip = 923; continue _fun00005;
 831:
            michal = 9;
            michal = offset[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {'shouldRasterizeIOS': true, 'style': null, 'collapsable': false};
            michal['style'] = golfie;
            golfie = _closure1_slot0;
            oscard = 10;
            oscard = offset[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.NativeText;
            oscard = {'numberOfLines': 1, 'ellipsizeMode': 'tail', 'accessible': false, 'accessibilityRole': 'none', 'accessibilityElementsHidden': true, 'experimental_useNativeText': true};
            oscard['style'] = verify;
            oscard['children'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 923:
            return entity;
        }
    };
    report = oscard.bind(verify)(report);
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'uikit-native/GuildIcon.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['GuildIconSizes'] = tangon;
    zuuluu['ImageSizes'] = michal;
    return entity;
})();