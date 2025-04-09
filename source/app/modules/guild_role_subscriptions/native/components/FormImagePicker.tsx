// app/modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = option;
    entity = function() { // Original name: pickImage
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _pickImage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 94; continue _fun00001 }
 7:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.openImagePicker;
                    michal = {};
                    oscard = argFoo;
                    michal['size'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=56);
 54:
                    return michal;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 91; continue _fun00001 }
 62:
                    tangon = michal.base64;
                    report = null;
                    if(!(report != tangon)) { _fun00002_ip = 88; continue _fun00001 }
 74:
                    report = {};
                    report['uri'] = tangon;
                    tangon = argBar;
                    tangon = tangon.bind(zuuluu)(report);
 88:
                    return zuuluu;
 91:
                    return michal;
 94:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    michal = function(argFoo) { // Original name: ImagePickerIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            echoed = michal.style;
            option = michal.image;
            var _closure2_slot0 = option;
            entity = michal.imageUploadSize;
            var _closure2_slot1 = entity;
            entity = michal.setImage;
            var _closure2_slot2 = entity;
            output = michal.previewResizeMode;
            zuuluu = michal.previewShape;
            yankee = michal.standalone;
            entity = michal.size;
            var _closure2_slot3 = entity;
            golfie = michal.disabled;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00004_ip = 80; continue _fun00003 }
 78:
            golfie = false;
 80:
            michal = _closure1_slot8;
            romeon = michal.bind(tangon)();
            foxtra = 'center';
            if(!(foxtra !== output)) { _fun00004_ip = 107; continue _fun00003 }
 99:
            update = romeon.image;
            _fun00004_ip = 113; continue _fun00003;
 107:
            update = romeon.imageCentered;
 113:
            michal = _closure1_slot9;
            michal = michal.CIRCLE;
            if(!(zuuluu !== michal)) { _fun00004_ip = 135; continue _fun00003 }
 127:
            result = romeon.imageSquircle;
            _fun00004_ip = 141; continue _fun00003;
 135:
            result = romeon.imageCircle;
 141:
            oscard = _closure1_slot4;
            zuuluu = oscard.useMemo;
            michal = new Array(2);
            michal[0] = option;
            michal[1] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = null;
                    tangon = zuuluu == entity;
                    verify = undefined;
                    entity = undefined;
                    if(tangon) { _fun00006_ip = 29; continue _fun00005 }
 20:
                    tangon = _closure2_slot0;
                    entity = tangon.uri;
 29:
                    if(!(zuuluu == entity)) { _fun00006_ip = 35; continue _fun00005 }
 33:
                    return verify;
 35:
                    entity = _closure2_slot0;
                    report = entity.uri;
                    tangon = report.startsWith;
                    entity = 'data:';
                    entity = tangon.bind(report)(entity);
                    if(entity) { _fun00006_ip = 178; continue _fun00005 }
 64:
                    entity = _closure2_slot3;
                    if(!(zuuluu != entity)) { _fun00006_ip = 178; continue _fun00005 }
 72:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.uri;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 7;
                    report = offset[entity];
                    oscard = option.bind(verify)(report);
                    report = oscard.getBestMediaProxySize;
                    golfie = _closure2_slot3;
                    entity = offset[entity];
                    option = option.bind(verify)(entity);
                    entity = option.getDevicePixelRatio;
                    entity = entity.bind(option)();
                    entity = golfie * entity;
                    oscard = report.bind(oscard)(entity);
                    entity = global;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    entity = '?size=';
                    entity = report.bind(entity)(oscard);
                    entity = tangon + entity;
                    zuuluu['uri'] = entity;
                    _fun00006_ip = 187; continue _fun00005;
 178:
                    michal = _closure2_slot0;
                    entity = michal.uri;
 187:
                    return entity;
                }
            };
            sizing = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            source = _closure1_slot2;
            entity = 8;
            entity = source[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            oscard = 'button';
            entity['accessibilityRole'] = oscard;
            kiloes = _closure1_slot0;
            oscard = 9;
            verify = source[oscard];
            verify = kiloes.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            oscard = source[oscard];
            oscard = kiloes.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.HNo5cH;
            oscard = verify.bind(offset)(oscard);
            entity['accessibilityLabel'] = oscard;
            oscard = {};
            oscard['disabled'] = golfie;
            entity['accessibilityState'] = oscard;
            report = function() { // Original name: onPress
                tangon = _closure1_slot10;
                zuuluu = _closure2_slot1;
                michal = _closure2_slot2;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity['onPress'] = report;
            oscard = romeon.image;
            report = new Array(5);
            report[0] = oscard;
            report[1] = result;
            oscard = romeon.imageContainerEmpty;
            report[2] = oscard;
            oscard = golfie;
            if(!oscard) { _fun00004_ip = 327; continue _fun00003 }
 322:
            oscard = romeon.disabled;
 327:
            report[3] = oscard;
            report[4] = echoed;
            entity['style'] = report;
            entity['disabled'] = golfie;
            offset = _closure1_slot6;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            report = 10;
            report = verify[report];
            verify = oscard.bind(tangon)(report);
            oscard = null;
            if(!(oscard == option)) { _fun00004_ip = 406; continue _fun00003 }
 373:
            report = {};
            report['resizeMode'] = foxtra;
            kiloes = _closure1_slot1;
            source = _closure1_slot2;
            foxtra = 11;
            foxtra = source[foxtra];
            foxtra = kiloes.bind(tangon)(foxtra);
            report['source'] = foxtra;
            _fun00004_ip = 460; continue _fun00003;
 406:
            foxtra = {};
            kiloes = new Array(3);
            kiloes[0] = update;
            kiloes[1] = echoed;
            kiloes[2] = result;
            foxtra['style'] = kiloes;
            result = oscard != output;
            kiloes = 'cover';
            if(!result) { _fun00004_ip = 442; continue _fun00003 }
 439:
            kiloes = output;
 442:
            foxtra['resizeMode'] = kiloes;
            kiloes = {};
            kiloes['uri'] = sizing;
            foxtra['source'] = kiloes;
            report = foxtra;
 460:
            verify = offset.bind(tangon)(verify, report);
            report = new Array(2);
            report[0] = verify;
            oscard = oscard != option;
            if(!oscard) { _fun00004_ip = 484; continue _fun00003 }
 481:
            oscard = !golfie;
 484:
            if(!oscard) { _fun00004_ip = 628; continue _fun00003 }
 490:
            verify = _closure1_slot6;
            option = _closure1_slot5;
            golfie = {};
            foxtra = romeon.editImageIcon;
            offset = new Array(2);
            offset[0] = foxtra;
            if(!yankee) { _fun00004_ip = 523; continue _fun00003 }
 517:
            yankee = romeon.standaloneIcon;
 523:
            offset[1] = yankee;
            golfie['style'] = offset;
            romeon = _closure1_slot6;
            output = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 12;
            offset = kiloes[foxtra];
            yankee = output.bind(tangon)(offset);
            offset = {};
            sizing = '#292b30';
            offset['color'] = sizing;
            sizing = 13;
            sizing = kiloes[sizing];
            sizing = output.bind(tangon)(sizing);
            offset['source'] = sizing;
            backup = _closure1_slot0;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.IconSizes;
            foxtra = foxtra.SMALL;
            offset['size'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 628:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = michal;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    yankee = 0;
    tangon = option[yankee];
    entity = undefined;
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    offset = 1;
    oscard = option[offset];
    tangon = argCor;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    oscard = tangon.jsx;
    var _closure1_slot6 = oscard;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = option[tangon];
    romeon = golfie.bind(entity)(tangon);
    verify = romeon.createStyles;
    tangon = {};
    oscard = 16;
    foxtra = {'flexDirection': 'row', 'justifyContent': 'space-between', 'marginHorizontal': 16};
    tangon['imageSelectionRow'] = foxtra;
    foxtra = {'flex': 1, 'flexDirection': 'column', 'marginEnd': 16};
    tangon['buttonColumn'] = foxtra;
    foxtra = {'flexWrap': 'wrap', 'marginBottom': 16};
    tangon['imageDescription'] = foxtra;
    foxtra = {'alignSelf': 'center', 'width': 84, 'height': 84};
    tangon['image'] = foxtra;
    foxtra = {'alignSelf': 'center', 'width': 20, 'height': 20};
    tangon['imageCentered'] = foxtra;
    foxtra = {};
    backup = 42;
    foxtra['borderRadius'] = backup;
    tangon['imageCircle'] = foxtra;
    foxtra = {};
    backup = 5;
    sizing = option[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.sm;
    foxtra['borderRadius'] = sizing;
    tangon['imageSquircle'] = foxtra;
    foxtra = {};
    sizing = option[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_TERTIARY;
    foxtra['backgroundColor'] = sizing;
    tangon['imageContainerEmpty'] = foxtra;
    foxtra = {'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'top': 0, 'height': 24, 'justifyContent': 'center', 'right': 0, 'padding': 4, 'position': 'absolute', 'width': 24};
    sizing = option[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_NORMAL;
    foxtra['backgroundColor'] = sizing;
    backup = option[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    foxtra['borderRadius'] = backup;
    tangon['editImageIcon'] = foxtra;
    foxtra = {'top': 4294967292, 'right': 4294967292};
    tangon['standaloneIcon'] = foxtra;
    foxtra = {};
    backup = 0.3;
    foxtra['opacity'] = backup;
    tangon['disabled'] = foxtra;
    tangon = verify.bind(romeon)(tangon);
    var _closure1_slot8 = tangon;
    tangon = {};
    tangon['CIRCLE'] = yankee;
    verify = 'CIRCLE';
    tangon[yankee] = verify;
    tangon['SQUIRCLE'] = offset;
    verify = 'SQUIRCLE';
    tangon[offset] = verify;
    var _closure1_slot9 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_role_subscriptions/native/components/FormImagePicker.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: FormImagePicker
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            output = tangon.description;
            romeon = tangon.imageUploadSize;
            var _closure2_slot0 = romeon;
            yankee = tangon.image;
            offset = tangon.setImage;
            var _closure2_slot1 = offset;
            foxtra = tangon.disabled;
            zuuluu = {'description': 0, 'imageUploadSize': 0, 'image': 0, 'setImage': 0, 'disabled': 0};
            entity = null;
            config = zuuluu;
            sequen = null;
            michal = silentSetPrototypeOf(config, sequen);
            config = {};
            sequen = tangon;
            vacuum = zuuluu;
            verify = copyDataProperties(config, sequen, vacuum);
            michal = _closure1_slot8;
            tangon = undefined;
            result = michal.bind(tangon)();
            if(!(entity != yankee)) { _fun00008_ip = 154; continue _fun00007 }
 95:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 9;
            michal = golfie[entity];
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.0KOidn;
            ctrled = michal.bind(zuuluu)(entity);
            _fun00008_ip = 211; continue _fun00007;
 154:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 9;
            michal = golfie[entity];
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.bGPfSk;
            ctrled = michal.bind(zuuluu)(entity);
 211:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot5;
            entity = {};
            report = result.imageSelectionRow;
            entity['style'] = report;
            option = _closure1_slot7;
            golfie = _closure1_slot5;
            report = {};
            backup = result.buttonColumn;
            report['style'] = backup;
            sizing = _closure1_slot6;
            kiloes = _closure1_slot0;
            update = _closure1_slot2;
            backup = 14;
            backup = update[backup];
            backup = kiloes.bind(tangon)(backup);
            kiloes = backup.Text;
            backup = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            result = result.imageDescription;
            backup['style'] = result;
            backup['children'] = output;
            kiloes = sizing.bind(tangon)(kiloes, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            output = _closure1_slot6;
            echoed = _closure1_slot1;
            result = 15;
            kiloes = update[result];
            sizing = echoed.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['text'] = ctrled;
            ctrled = update[result];
            ctrled = echoed.bind(tangon)(ctrled);
            ctrled = ctrled.Colors;
            ctrled = ctrled.GREY;
            kiloes['color'] = ctrled;
            ctrled = update[result];
            ctrled = echoed.bind(tangon)(ctrled);
            ctrled = ctrled.Looks;
            ctrled = ctrled.FILLED;
            kiloes['look'] = ctrled;
            source = function() { // Original name: onPress
                tangon = _closure1_slot10;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            kiloes['onPress'] = source;
            result = update[result];
            result = echoed.bind(tangon)(result);
            result = result.Sizes;
            result = result.MEDIUM;
            kiloes['size'] = result;
            kiloes['disabled'] = foxtra;
            kiloes = output.bind(tangon)(sizing, kiloes);
            backup[1] = kiloes;
            report['children'] = backup;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot12;
            oscard = {};
            config = oscard;
            sequen = verify;
            verify = copyDataProperties(config, sequen);
            verify = 'disabled';
            oscard[verify] = foxtra;
            verify = 'imageUploadSize';
            oscard[verify] = romeon;
            verify = 'image';
            oscard[verify] = yankee;
            verify = 'setImage';
            oscard[verify] = offset;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['PreviewShape'] = tangon;
    zuuluu['ImagePickerIcon'] = michal;
    return entity;
})();