// app/modules/app_launcher/native/screens/home/FrecencySection.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: Placeholder
        entity = _closure1_slot13;
        tangon = undefined;
        foxtra = entity.bind(tangon)();
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 12;
        report = zuuluu[entity];
        option = michal.bind(tangon)(report);
        golfie = option.usePlaceholderWidth;
        report = 20;
        oscard = 90;
        sizing = golfie.bind(option)(report, oscard);
        entity = zuuluu[entity];
        zuuluu = michal.bind(tangon)(entity);
        michal = zuuluu.usePlaceholderWidth;
        entity = 70;
        kiloes = michal.bind(zuuluu)(report, entity);
        zuuluu = _closure1_slot12;
        michal = _closure1_slot5;
        entity = {};
        report = foxtra.commandContainer;
        entity['style'] = report;
        golfie = _closure1_slot11;
        oscard = _closure1_slot5;
        report = {};
        option = foxtra.loadingCommandIcon;
        report['style'] = option;
        oscard = golfie.bind(tangon)(oscard, report);
        report = new Array(2);
        report[0] = oscard;
        option = _closure1_slot12;
        golfie = _closure1_slot5;
        oscard = {};
        yankee = _closure1_slot11;
        verify = {};
        backup = foxtra.loadingTextPlaceholder;
        romeon = new Array(2);
        romeon[0] = backup;
        backup = {};
        backup['width'] = sizing;
        romeon[1] = backup;
        verify['style'] = romeon;
        yankee = yankee.bind(tangon)(golfie, verify);
        verify = new Array(2);
        verify[0] = yankee;
        romeon = _closure1_slot11;
        yankee = _closure1_slot5;
        offset = {};
        backup = foxtra.loadingTextPlaceholderSmall;
        foxtra = new Array(2);
        foxtra[0] = backup;
        backup = {};
        backup['width'] = kiloes;
        foxtra[1] = backup;
        offset['style'] = foxtra;
        offset = romeon.bind(tangon)(yankee, offset);
        verify[1] = offset;
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: FrecentActivityOneClickCTA
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            output = michal.context;
            var _closure2_slot0 = output;
            offset = michal.app;
            var _closure2_slot1 = offset;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 13;
            michal = zuuluu[michal];
            oscard = report.bind(tangon)(michal);
            michal = oscard.useAppLauncherContext;
            michal = michal.bind(oscard)();
            foxtra = michal.entrypoint;
            backup = michal.onActivityItemSelected;
            oscard = _closure1_slot4;
            michal = oscard.useId;
            romeon = michal.bind(oscard)();
            michal = 14;
            michal = zuuluu[michal];
            verify = report.bind(tangon)(michal);
            golfie = verify.useStateFromStoresArray;
            michal = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    entity = zuuluu.isLaunchingActivity;
                    zuuluu = entity.bind(zuuluu)();
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    report = _closure1_slot7;
                    tangon = report.getLaunchState;
                    michal = _closure2_slot1;
                    zuuluu = michal.applicationId;
                    michal = _closure2_slot0;
                    option = michal.type;
                    golfie = 'channel';
                    michal = undefined;
                    if(!(golfie === option)) { _fun00004_ip = 80; continue _fun00003 }
 66:
                    oscard = _closure2_slot0;
                    oscard = oscard.channel;
                    michal = oscard.id;
 80:
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity[1] = michal;
                    return entity;
                }
            };
            golfie = golfie.bind(verify)(oscard, michal);
            oscard = _closure1_slot3;
            michal = 2;
            oscard = oscard.bind(tangon)(golfie, michal);
            michal = 0;
            golfie = oscard[michal];
            michal = 1;
            michal = oscard[michal];
            yankee = 29;
            zuuluu = zuuluu[yankee];
            oscard = report.bind(tangon)(zuuluu);
            report = oscard.useActivityAction;
            zuuluu = {};
            zuuluu['context'] = output;
            verify = offset.applicationId;
            zuuluu['applicationId'] = verify;
            verify = report.bind(oscard)(zuuluu);
            zuuluu = null;
            oscard = zuuluu != michal;
            if(!oscard) { _fun00002_ip = 211; continue _fun00001 }
 205:
            oscard = michal.isLaunching;
 211:
            if(!oscard) { _fun00002_ip = 224; continue _fun00001 }
 214:
            michal = michal.componentId;
            oscard = michal === romeon;
 224:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 22;
            michal = sizing[michal];
            report = kiloes.bind(tangon)(michal);
            zuuluu = report.useHandleActivityItemSelected;
            michal = {};
            result = offset.applicationId;
            michal['applicationId'] = result;
            michal['context'] = output;
            output = 15;
            output = sizing[output];
            output = kiloes.bind(tangon)(output);
            output = output.AppLauncherSectionName;
            output = output.RECENT_APPS;
            michal['sectionName'] = output;
            michal['onActivityItemSelected'] = backup;
            backup = 30;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.ApplicationCommandTriggerLocations;
            backup = backup.APP_LAUNCHER_HOME;
            michal['location'] = backup;
            michal['entrypoint'] = foxtra;
            michal['launchingComponentId'] = romeon;
            romeon = false;
            michal['fetchesApplication'] = romeon;
            michal = zuuluu.bind(report)(michal);
            romeon = michal.handleActivityItemSelected;
            _closure2_slot2 = romeon;
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = romeon;
            entity = function() {
                michal = _closure2_slot2;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot18;
            entity = {};
            entity['app'] = offset;
            if(golfie) { _fun00002_ip = 440; continue _fun00001 }
 407:
            offset = _closure1_slot0;
            option = _closure1_slot2;
            option = option[yankee];
            option = offset.bind(tangon)(option);
            option = option.ActivityAction;
            option = option.LEAVE;
            golfie = verify === option;
 440:
            entity['disabled'] = golfie;
            entity['submitting'] = oscard;
            entity['onAppSelected'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: FrecentApp
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.app;
            var _closure2_slot0 = michal;
            verify = entity.disabled;
            romeon = entity.submitting;
            oscard = undefined;
            if(!(romeon === oscard)) { _fun00006_ip = 34; continue _fun00005 }
 32:
            romeon = false;
 34:
            entity = entity.onAppSelected;
            var _closure2_slot1 = entity;
            entity = _closure1_slot13;
            yankee = entity.bind(oscard)();
            zuuluu = michal.section;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 306; continue _fun00005 }
 69:
            tangon = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 22;
            zuuluu = offset[zuuluu];
            foxtra = tangon.bind(oscard)(zuuluu);
            report = foxtra.getAppLauncherIconSource;
            zuuluu = michal.section;
            zuuluu = zuuluu.application;
            backup = report.bind(foxtra)(zuuluu);
            report = _closure1_slot12;
            zuuluu = 24;
            zuuluu = offset[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.PressableOpacity;
            zuuluu = {};
            if(verify) { _fun00006_ip = 145; continue _fun00005 }
 137:
            offset = yankee.appContainer;
            _fun00006_ip = 151; continue _fun00005;
 145:
            offset = yankee.appContainerDisabled;
 151:
            zuuluu['style'] = offset;
            zuuluu['disabled'] = verify;
            golfie = function() { // Original name: onPress
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    tangon = null;
                    michal = tangon != michal;
                    if(!michal) { _fun00008_ip = 34; continue _fun00007 }
 16:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.section;
                    zuuluu = zuuluu.application;
                    michal = tangon != zuuluu;
 34:
                    if(!michal) { _fun00008_ip = 108; continue _fun00007 }
 37:
                    zuuluu = _closure2_slot1;
                    michal = {};
                    entity = _closure2_slot0;
                    entity = entity.section;
                    entity = entity.application;
                    michal['application'] = entity;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 15;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.AppLauncherSectionName;
                    tangon = tangon.RECENT_APPS;
                    michal['sectionName'] = tangon;
                    entity = zuuluu.bind(entity)(michal);
 108:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['onPress'] = golfie;
            verify = entity != backup;
            if(!verify) { _fun00006_ip = 223; continue _fun00005 }
 177:
            foxtra = _closure1_slot11;
            offset = _closure1_slot1;
            kiloes = _closure1_slot2;
            golfie = 31;
            golfie = kiloes[golfie];
            offset = offset.bind(oscard)(golfie);
            golfie = {};
            kiloes = yankee.appIcon;
            golfie['style'] = kiloes;
            golfie['source'] = backup;
            verify = foxtra.bind(oscard)(offset, golfie);
 223:
            golfie = new Array(2);
            golfie[0] = verify;
            offset = _closure1_slot11;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 32;
            option = foxtra[option];
            option = verify.bind(oscard)(option);
            verify = option.SubmittingOverlay;
            option = {};
            option['submitting'] = romeon;
            yankee = yankee.submittingOverlay;
            option['style'] = yankee;
            option = offset.bind(oscard)(verify, option);
            golfie[1] = option;
            zuuluu['children'] = golfie;
            michal = michal.applicationId;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return michal;
 306:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    verify = 0;
    michal = golfie[verify];
    entity = undefined;
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot3 = michal;
    option = 1;
    report = golfie[option];
    michal = argCor;
    michal = michal.bind(entity)(report);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.View;
    var _closure1_slot5 = report;
    michal = michal.ScrollView;
    var _closure1_slot6 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    report = golfie[michal];
    report = foxtra.bind(entity)(report);
    var _closure1_slot8 = report;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.FrecencySectionSelection;
    var _closure1_slot9 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot10 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.jsx;
    var _closure1_slot11 = report;
    michal = michal.jsxs;
    var _closure1_slot12 = michal;
    michal = 7;
    michal = golfie[michal];
    offset = oscard.bind(entity)(michal);
    report = offset.createStyles;
    michal = {};
    yankee = {};
    romeon = 8;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_16;
    yankee['marginBottom'] = backup;
    michal['container'] = yankee;
    sizing = 'row';
    backup = 'center';
    yankee = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    michal['headerContainer'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center'};
    kiloes = golfie[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_4;
    yankee['gap'] = kiloes;
    michal['header'] = yankee;
    yankee = {'marginTop': 8, 'overflow': 'visible'};
    michal['scrollView'] = yankee;
    yankee = {};
    kiloes = golfie[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    yankee['gap'] = kiloes;
    michal['scrollViewContentContainer'] = yankee;
    kiloes = 16;
    yankee = {'height': 16, 'width': 16};
    michal['contextMenuIcon'] = yankee;
    yankee = {};
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.CARD_PRIMARY_BG;
    yankee['backgroundColor'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.radii;
    output = output.lg;
    yankee['borderRadius'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.shadows;
    echoed = output.SHADOW_LOW;
    update = yankee;
    output = copyDataProperties(update, echoed);
    michal['appContainer'] = yankee;
    yankee = {};
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.CARD_PRIMARY_BG;
    yankee['backgroundColor'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.radii;
    output = output.lg;
    yankee['borderRadius'] = output;
    output = 0.4;
    yankee['opacity'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.shadows;
    echoed = output.SHADOW_LOW;
    update = yankee;
    output = copyDataProperties(update, echoed);
    michal['appContainerDisabled'] = yankee;
    yankee = {};
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.CARD_PRIMARY_BG;
    yankee['backgroundColor'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.radii;
    output = output.md;
    yankee['borderRadius'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.spacing;
    output = output.PX_12;
    yankee['paddingLeft'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    yankee['paddingRight'] = output;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.spacing;
    output = output.PX_12;
    yankee['paddingVertical'] = output;
    yankee['flexDirection'] = sizing;
    yankee['justifyContent'] = backup;
    yankee['alignItems'] = backup;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    yankee['gap'] = backup;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.shadows;
    echoed = backup.SHADOW_LOW;
    update = yankee;
    backup = copyDataProperties(update, echoed);
    michal['commandContainer'] = yankee;
    yankee = {'width': 36, 'height': 36};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    yankee['borderRadius'] = backup;
    michal['commandIcon'] = yankee;
    yankee = {'width': 60, 'height': 60};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    yankee['borderRadius'] = backup;
    michal['appIcon'] = yankee;
    yankee = {'width': 36, 'height': 36};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    yankee['borderRadius'] = backup;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_MOD_SUBTLE;
    yankee['backgroundColor'] = backup;
    michal['loadingCommandIcon'] = yankee;
    yankee = {};
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_MOD_SUBTLE;
    yankee['backgroundColor'] = backup;
    yankee['height'] = kiloes;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    yankee['borderRadius'] = backup;
    backup = 'flex-start';
    yankee['alignSelf'] = backup;
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    yankee['marginBottom'] = sizing;
    michal['loadingTextPlaceholder'] = yankee;
    yankee = {};
    sizing = golfie[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_MOD_SUBTLE;
    yankee['backgroundColor'] = sizing;
    yankee['height'] = kiloes;
    kiloes = golfie[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.lg;
    yankee['borderRadius'] = kiloes;
    yankee['alignSelf'] = backup;
    michal['loadingTextPlaceholderSmall'] = yankee;
    yankee = {'position': 'absolute', 'top': 0, 'left': 0, 'width': 60, 'height': 60};
    romeon = golfie[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.lg;
    yankee['borderRadius'] = romeon;
    michal['submittingOverlay'] = yankee;
    michal = report.bind(offset)(michal);
    var _closure1_slot13 = michal;
    michal = {};
    michal['APPS'] = verify;
    report = 'APPS';
    michal[verify] = report;
    michal['COMMANDS'] = option;
    report = 'COMMANDS';
    michal[option] = report;
    var _closure1_slot14 = michal;
    report = {};
    option = "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}";
    report['code'] = option;
    var _closure1_slot15 = report;
    report = 33;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/native/screens/home/FrecencySection.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: FrecencySection
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.context;
            var _closure2_slot0 = michal;
            michal = entity.sectionDescriptors;
            var _closure2_slot1 = michal;
            result = entity.commands;
            var _closure2_slot2 = result;
            yankee = entity.loading;
            var _closure2_slot3 = yankee;
            echoed = entity.apps;
            var _closure2_slot4 = echoed;
            michal = entity.onAppSelected;
            var _closure2_slot5 = michal;
            michal = entity.onCommandSelected;
            var _closure2_slot6 = michal;
            entity = entity.onViewAllSelected;
            var _closure2_slot7 = entity;
            tangon = undefined;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            entity = _closure1_slot13;
            backup = entity.bind(tangon)();
            var _closure2_slot8 = backup;
            report = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 13;
            entity = verify[entity];
            michal = report.bind(tangon)(entity);
            entity = michal.useAppLauncherContext;
            entity = entity.bind(michal)();
            michal = entity.entrypoint;
            zuuluu = _closure1_slot4;
            entity = zuuluu.useState;
            romeon = false;
            zuuluu = entity.bind(zuuluu)(romeon);
            entity = _closure1_slot3;
            golfie = 2;
            entity = entity.bind(tangon)(zuuluu, golfie);
            ctrled = 0;
            option = entity[ctrled];
            var _closure2_slot9 = option;
            zuuluu = 1;
            entity = entity[zuuluu];
            var _closure2_slot10 = entity;
            entity = 14;
            foxtra = verify[entity];
            output = report.bind(tangon)(foxtra);
            sizing = output.useStateFromStores;
            foxtra = _closure1_slot8;
            kiloes = new Array(1);
            kiloes[0] = foxtra;
            foxtra = function() {
                michal = _closure1_slot8;
                entity = michal.getSelection;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = sizing.bind(output)(kiloes, foxtra);
            entity = verify[entity];
            kiloes = report.bind(tangon)(entity);
            verify = kiloes.useStateFromStores;
            entity = _closure1_slot7;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.isLaunchingActivity;
                entity = entity.bind(michal)();
                return entity;
            };
            update = verify.bind(kiloes)(report, entity);
            verify = _closure1_slot4;
            report = verify.useState;
            entity = result.length;
            if(!(entity > ctrled)) { _fun00010_ip = 320; continue _fun00009 }
 306:
            entity = _closure1_slot9;
            entity = entity.COMMANDS;
            if(!(foxtra !== entity)) { _fun00010_ip = 332; continue _fun00009 }
 320:
            entity = _closure1_slot14;
            entity = entity.APPS;
            _fun00010_ip = 342; continue _fun00009;
 332:
            foxtra = _closure1_slot14;
            entity = foxtra.COMMANDS;
 342:
            report = report.bind(verify)(entity);
            entity = _closure1_slot3;
            entity = entity.bind(tangon)(report, golfie);
            report = entity[ctrled];
            _closure2_slot11 = report;
            entity = entity[zuuluu];
            _closure2_slot12 = entity;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 15;
            entity = sizing[entity];
            entity = foxtra.bind(tangon)(entity);
            entity = entity.AppLauncherEntrypoint;
            entity = entity.VOICE;
            entity = michal === entity;
            _closure2_slot13 = entity;
            verify = _closure1_slot4;
            golfie = verify.useEffect;
            michal = result.length;
            zuuluu = new Array(4);
            zuuluu[0] = michal;
            michal = echoed.length;
            zuuluu[1] = michal;
            zuuluu[2] = yankee;
            zuuluu[3] = report;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot3;
                    if(entity) { _fun00012_ip = 44; continue _fun00011 }
 10:
                    michal = _closure2_slot2;
                    michal = michal.length;
                    tangon = 0;
                    michal = tangon === michal;
                    if(!michal) { _fun00012_ip = 41; continue _fun00011 }
 28:
                    zuuluu = _closure2_slot4;
                    zuuluu = zuuluu.length;
                    michal = tangon === zuuluu;
 41:
                    entity = michal;
 44:
                    if(entity) { _fun00012_ip = 267; continue _fun00011 }
 50:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 16;
                    entity = zuuluu[entity];
                    golfie = undefined;
                    tangon = michal.bind(golfie)(entity);
                    zuuluu = tangon.trackWithMetadata;
                    entity = _closure1_slot10;
                    michal = entity.APP_LAUNCHER_FRECENTS_SEEN;
                    entity = {};
                    verify = _closure2_slot11;
                    option = _closure1_slot14;
                    option = option.APPS;
                    if(!(verify !== option)) { _fun00012_ip = 122; continue _fun00011 }
 111:
                    option = _closure2_slot2;
                    option = option.length;
                    _fun00012_ip = 131; continue _fun00011;
 122:
                    verify = _closure2_slot4;
                    option = verify.length;
 131:
                    entity['num'] = option;
                    option = _closure2_slot11;
                    oscard = _closure1_slot14;
                    oscard = oscard.APPS;
                    if(!(option !== oscard)) { _fun00012_ip = 188; continue _fun00011 }
 154:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 15;
                    oscard = verify[oscard];
                    oscard = option.bind(golfie)(oscard);
                    oscard = oscard.AppLauncherSectionName;
                    oscard = oscard.RECENT_COMMANDS;
                    _fun00012_ip = 220; continue _fun00011;
 188:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 15;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    option = option.AppLauncherSectionName;
                    oscard = option.RECENT_APPS;
 220:
                    entity['section_name'] = oscard;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 15;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    report = report.AppLauncherLocations;
                    report = report.HOME;
                    entity['location'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 267:
                    entity = undefined;
                    return entity;
                }
            };
            michal = golfie.bind(verify)(michal, zuuluu);
            verify = _closure1_slot4;
            golfie = verify.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = echoed;
            michal = function() {
                tangon = _closure2_slot4;
                zuuluu = tangon.slice;
                michal = 0;
                entity = 8;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            kiloes = golfie.bind(verify)(michal, zuuluu);
            michal = {};
            michal['apps'] = kiloes;
            michal['onlyActivityApps'] = entity;
            entity = function(argFoo) { // Original name: useFetchFrecentActivityApps
                entity = argFoo;
                golfie = entity.apps;
                var _closure3_slot0 = golfie;
                oscard = entity.onlyActivityApps;
                var _closure3_slot1 = oscard;
                report = _closure1_slot4;
                tangon = report.useMemo;
                zuuluu = new Array(2);
                zuuluu[0] = golfie;
                zuuluu[1] = oscard;
                michal = function() {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zuuluu = argFoo;
                            entity = zuuluu.section;
                            report = null;
                            michal = report == entity;
                            entity = null;
                            if(michal) { _fun00014_ip = 119; continue _fun00013 }
 19:
                            michal = zuuluu.section;
                            michal = michal.application;
                            tangon = report != michal;
                            michal = null;
                            if(!tangon) { _fun00014_ip = 116; continue _fun00013 }
 38:
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            tangon = 9;
                            oscard = oscard[tangon];
                            tangon = undefined;
                            golfie = golfie.bind(tangon)(oscard);
                            oscard = golfie.isEmbeddedApp;
                            tangon = zuuluu.section;
                            tangon = tangon.application;
                            tangon = oscard.bind(golfie)(tangon);
                            michal = null;
                            if(!tangon) { _fun00014_ip = 116; continue _fun00013 }
 89:
                            tangon = _closure3_slot1;
                            michal = null;
                            if(!tangon) { _fun00014_ip = 116; continue _fun00013 }
 101:
                            zuuluu = zuuluu.section;
                            zuuluu = zuuluu.application;
                            michal = zuuluu.id;
 116:
                            entity = michal;
 119:
                            return entity;
                        }
                    };
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.filter;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 10;
                    tangon = tangon[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tangon);
                    entity = entity.isNotNullish;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = tangon.bind(report)(michal, zuuluu);
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            entity = entity.bind(tangon)(michal);
            entity = 17;
            entity = sizing[entity];
            zuuluu = foxtra.bind(tangon)(entity);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: W
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = {};
                    zuuluu = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 18;
                    tangon = tangon[michal];
                    michal = undefined;
                    report = report.bind(michal)(tangon);
                    tangon = report.withTiming;
                    oscard = _closure2_slot9;
                    michal = '0deg';
                    if(!oscard) { _fun00016_ip = 56; continue _fun00015 }
 50:
                    michal = '-180deg';
 56:
                    michal = tangon.bind(report)(michal);
                    zuuluu['rotate'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            golfie = {};
            verify = 18;
            verify = sizing[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.withTiming;
            golfie['withTiming'] = verify;
            golfie['isRecentsMenuOpen'] = option;
            entity['__closure'] = golfie;
            golfie = 4528534448308.0;
            entity['__workletHash'] = golfie;
            golfie = _closure1_slot15;
            entity['__initData'] = golfie;
            entity = michal.bind(zuuluu)(entity);
            _closure2_slot14 = entity;
            entity = result.length;
            if(!(ctrled === entity)) { _fun00010_ip = 636; continue _fun00009 }
 624:
            entity = echoed.length;
            if(!(ctrled !== entity)) { _fun00010_ip = 1534; continue _fun00009 }
 636:
            entity = {};
            option = _closure1_slot0;
            michal = _closure1_slot2;
            record = 19;
            zuuluu = michal[record];
            zuuluu = option.bind(tangon)(zuuluu);
            golfie = zuuluu.intl;
            zuuluu = golfie.string;
            michal = michal[record];
            michal = option.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.XRBNsL;
            michal = zuuluu.bind(golfie)(michal);
            entity['label'] = michal;
            michal = _closure1_slot14;
            zuuluu = michal.COMMANDS;
            michal = undefined;
            if(!(report === zuuluu)) { _fun00010_ip = 741; continue _fun00009 }
 715:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 20;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            michal = zuuluu.CheckmarkSmallBoldIcon;
 741:
            entity['IconComponent'] = michal;
            michal = function() { // Original name: action
                tangon = _closure2_slot12;
                entity = _closure1_slot14;
                zuuluu = entity.COMMANDS;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 21;
                zuuluu = option[zuuluu];
                report = golfie.bind(entity)(zuuluu);
                tangon = report.setFrecencySectionSelection;
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.COMMANDS;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = 16;
                zuuluu = option[zuuluu];
                report = golfie.bind(entity)(zuuluu);
                tangon = report.trackWithMetadata;
                michal = _closure1_slot10;
                zuuluu = michal.APP_LAUNCHER_FRECENTS_TOGGLED;
                michal = {};
                oscard = _closure2_slot2;
                oscard = oscard.length;
                michal['num'] = oscard;
                oscard = 15;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.AppLauncherSectionName;
                oscard = oscard.RECENT_COMMANDS;
                michal['section_name'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity['action'] = michal;
            foxtra = new Array(2);
            foxtra[0] = entity;
            entity = {};
            option = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = michal[record];
            zuuluu = option.bind(tangon)(zuuluu);
            golfie = zuuluu.intl;
            zuuluu = golfie.string;
            michal = michal[record];
            michal = option.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.TCAk0t;
            michal = zuuluu.bind(golfie)(michal);
            entity['label'] = michal;
            michal = _closure1_slot14;
            zuuluu = michal.APPS;
            michal = undefined;
            if(!(report === zuuluu)) { _fun00010_ip = 867; continue _fun00009 }
 841:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 20;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            michal = zuuluu.CheckmarkSmallBoldIcon;
 867:
            entity['IconComponent'] = michal;
            michal = function() { // Original name: action
                tangon = _closure2_slot12;
                entity = _closure1_slot14;
                zuuluu = entity.APPS;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 21;
                zuuluu = option[zuuluu];
                report = golfie.bind(entity)(zuuluu);
                tangon = report.setFrecencySectionSelection;
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.APPS;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = 16;
                zuuluu = option[zuuluu];
                report = golfie.bind(entity)(zuuluu);
                tangon = report.trackWithMetadata;
                michal = _closure1_slot10;
                zuuluu = michal.APP_LAUNCHER_FRECENTS_TOGGLED;
                michal = {};
                oscard = _closure2_slot4;
                oscard = oscard.length;
                michal['num'] = oscard;
                oscard = 15;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.AppLauncherSectionName;
                oscard = oscard.RECENT_APPS;
                michal['section_name'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity['action'] = michal;
            foxtra[1] = entity;
            michal = result.slice;
            entity = 8;
            zuuluu = michal.bind(result)(ctrled, entity);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    tangon = _closure2_slot1;
                    zuuluu = tangon.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.applicationId;
                        entity = michal === entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(entity);
                    var _closure3_slot1 = zuuluu;
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 22;
                    entity = report[entity];
                    oscard = undefined;
                    verify = tangon.bind(oscard)(entity);
                    report = verify.getAppLauncherIconSource;
                    entity = null;
                    offset = entity == zuuluu;
                    tangon = undefined;
                    if(offset) { _fun00018_ip = 84; continue _fun00017 }
 79:
                    tangon = zuuluu.application;
 84:
                    yankee = report.bind(verify)(tangon);
                    if(!(entity != zuuluu)) { _fun00018_ip = 506; continue _fun00017 }
 96:
                    verify = _closure1_slot0;
                    tangon = _closure1_slot2;
                    report = 9;
                    tangon = tangon[report];
                    verify = verify.bind(oscard)(tangon);
                    tangon = verify.getSectionName;
                    zuuluu = zuuluu.application;
                    if(!(entity == zuuluu)) { _fun00018_ip = 154; continue _fun00017 }
 131:
                    romeon = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[report];
                    offset = romeon.bind(oscard)(offset);
                    zuuluu = offset.FAKE_BUILT_IN_APP;
 154:
                    kiloes = tangon.bind(verify)(zuuluu);
                    tangon = michal.type;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 23;
                    zuuluu = offset[zuuluu];
                    zuuluu = verify.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.ApplicationCommandType;
                    zuuluu = zuuluu.PRIMARY_ENTRY_POINT;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 207; continue _fun00017 }
 200:
                    echoed = michal.displayName;
                    _fun00018_ip = 240; continue _fun00017;
 207:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.formatPrimaryEntryPointCommandName;
                    zuuluu = michal.displayName;
                    echoed = tangon.bind(report)(zuuluu);
 240:
                    report = _closure1_slot12;
                    tangon = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 24;
                    zuuluu = verify[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = zuuluu.PressableOpacity;
                    zuuluu = {};
                    option = _closure2_slot8;
                    option = option.commandContainer;
                    zuuluu['style'] = option;
                    golfie = function() { // Original name: onPress
                        tangon = _closure2_slot6;
                        zuuluu = _closure3_slot0;
                        michal = _closure3_slot1;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu['onPress'] = golfie;
                    option = entity != yankee;
                    if(!option) { _fun00018_ip = 349; continue _fun00017 }
 304:
                    offset = _closure1_slot11;
                    verify = _closure1_slot1;
                    romeon = _closure1_slot2;
                    golfie = 25;
                    golfie = romeon[golfie];
                    verify = verify.bind(oscard)(golfie);
                    golfie = {};
                    romeon = 36;
                    golfie['iconSize'] = romeon;
                    golfie['iconSource'] = yankee;
                    option = offset.bind(oscard)(verify, golfie);
 349:
                    golfie = new Array(2);
                    golfie[0] = option;
                    offset = _closure1_slot12;
                    verify = _closure1_slot5;
                    option = {};
                    result = _closure1_slot11;
                    foxtra = _closure1_slot0;
                    sizing = _closure1_slot2;
                    romeon = 26;
                    yankee = sizing[romeon];
                    yankee = foxtra.bind(oscard)(yankee);
                    output = yankee.Text;
                    yankee = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
                    yankee['children'] = echoed;
                    output = result.bind(oscard)(output, yankee);
                    yankee = new Array(2);
                    yankee[0] = output;
                    backup = _closure1_slot11;
                    romeon = sizing[romeon];
                    romeon = foxtra.bind(oscard)(romeon);
                    foxtra = romeon.Text;
                    romeon = {'variant': 'text-xs/normal', 'color': 'text-secondary'};
                    romeon['children'] = kiloes;
                    romeon = backup.bind(oscard)(foxtra, romeon);
                    yankee[1] = romeon;
                    option['children'] = yankee;
                    option = offset.bind(oscard)(verify, option);
                    golfie[1] = option;
                    zuuluu['children'] = golfie;
                    michal = michal.id;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return michal;
 506:
                    return entity;
                }
            };
            golfie = michal.bind(zuuluu)(entity);
            zuuluu = golfie.filter;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 10;
            entity = verify[michal];
            entity = option.bind(tangon)(entity);
            entity = entity.isNotNullish;
            entity = zuuluu.bind(golfie)(entity);
            golfie = kiloes.map;
            zuuluu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.section;
                    tangon = null;
                    michal = tangon == entity;
                    entity = null;
                    if(michal) { _fun00020_ip = 179; continue _fun00019 }
 22:
                    michal = zuuluu.section;
                    michal = michal.application;
                    if(!(tangon != michal)) { _fun00020_ip = 95; continue _fun00019 }
 36:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 9;
                    michal = oscard[michal];
                    golfie = undefined;
                    oscard = report.bind(golfie)(michal);
                    report = oscard.isEmbeddedApp;
                    michal = zuuluu.section;
                    michal = michal.application;
                    michal = report.bind(oscard)(michal);
                    if(!michal) { _fun00020_ip = 95; continue _fun00019 }
 85:
                    michal = _closure2_slot13;
                    if(michal) { _fun00020_ip = 141; continue _fun00019 }
 95:
                    offset = _closure1_slot11;
                    verify = _closure1_slot18;
                    oscard = {};
                    oscard['app'] = zuuluu;
                    michal = _closure2_slot5;
                    oscard['onAppSelected'] = michal;
                    report = zuuluu.applicationId;
                    michal = undefined;
                    michal = offset.bind(michal)(verify, oscard, report);
                    _fun00020_ip = 176; continue _fun00019;
 141:
                    oscard = _closure1_slot11;
                    report = _closure1_slot17;
                    tangon = {};
                    option = _closure2_slot0;
                    tangon['context'] = option;
                    tangon['app'] = zuuluu;
                    zuuluu = zuuluu.applicationId;
                    michal = oscard.bind(golfie)(report, tangon, zuuluu);
 176:
                    entity = michal;
 179:
                    return entity;
                }
            };
            golfie = golfie.bind(kiloes)(zuuluu);
            zuuluu = golfie.filter;
            michal = verify[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = result.length;
            if(!(ctrled === michal)) { _fun00010_ip = 1014; continue _fun00009 }
 1005:
            michal = echoed.length;
            if(!(!(michal > ctrled))) { _fun00010_ip = 1050; continue _fun00009 }
 1014:
            michal = result.length;
            source = report;
            if(!(michal > ctrled)) { _fun00010_ip = 1048; continue _fun00009 }
 1026:
            michal = echoed.length;
            source = report;
            if(!(ctrled === michal)) { _fun00010_ip = 1048; continue _fun00009 }
 1038:
            michal = _closure1_slot14;
            source = michal.COMMANDS;
 1048:
            _fun00010_ip = 1060; continue _fun00009;
 1050:
            michal = _closure1_slot14;
            source = michal.APPS;
 1060:
            _closure2_slot15 = source;
            michal = _closure1_slot14;
            michal = michal.COMMANDS;
            verify = zuuluu;
            if(!(source === michal)) { _fun00010_ip = 1084; continue _fun00009 }
 1081:
            verify = entity;
 1084:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot5;
            entity = {};
            report = backup.container;
            entity['style'] = report;
            option = _closure1_slot12;
            golfie = _closure1_slot5;
            report = {};
            kiloes = backup.headerContainer;
            report['style'] = kiloes;
            output = _closure1_slot11;
            sizing = _closure1_slot0;
            vacuum = _closure1_slot2;
            kiloes = 27;
            kiloes = vacuum[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            sizing = kiloes.ContextMenu;
            kiloes = {};
            result = result.length;
            result = result > ctrled;
            if(!result) { _fun00010_ip = 1176; continue _fun00009 }
 1167:
            echoed = echoed.length;
            result = echoed > ctrled;
 1176:
            kiloes['enabled'] = result;
            kiloes['items'] = foxtra;
            foxtra = true;
            kiloes['triggerOnTap'] = foxtra;
            result = function() { // Original name: onOpen
                zuuluu = _closure2_slot10;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            kiloes['onOpen'] = result;
            result = function() { // Original name: onClose
                zuuluu = _closure2_slot10;
                michal = undefined;
                entity = false;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            kiloes['onClose'] = result;
            result = function(argFoo) { // Original name: children
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = argFoo;
                    report = zuuluu.ref;
                    option = null;
                    michal = Object.create(option);
                    verify = 0;
                    michal['ref'] = verify;
                    echoed = {};
                    result = zuuluu;
                    output = michal;
                    result = copyDataProperties(echoed, result, output);
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot5;
                    michal = {};
                    oscard = _closure2_slot8;
                    oscard = oscard.header;
                    michal['style'] = oscard;
                    echoed = michal;
                    entity = copyDataProperties(echoed, result);
                    entity = 'ref';
                    michal[entity] = report;
                    golfie = _closure1_slot11;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    entity = 26;
                    report = sizing[entity];
                    entity = undefined;
                    report = kiloes.bind(entity)(report);
                    oscard = report.Text;
                    report = {'variant': 'text-lg/bold', 'color': 'header-primary'};
                    yankee = 19;
                    romeon = sizing[yankee];
                    romeon = kiloes.bind(entity)(romeon);
                    backup = romeon.intl;
                    romeon = backup.string;
                    yankee = sizing[yankee];
                    yankee = kiloes.bind(entity)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.acSE0t;
                    yankee = romeon.bind(backup)(yankee);
                    report['children'] = yankee;
                    report = golfie.bind(entity)(oscard, report);
                    oscard = new Array(2);
                    oscard[0] = report;
                    report = _closure2_slot2;
                    report = report.length;
                    golfie = report > verify;
                    report = null;
                    if(!golfie) { _fun00022_ip = 332; continue _fun00021 }
 207:
                    golfie = _closure2_slot4;
                    golfie = golfie.length;
                    golfie = golfie > verify;
                    report = null;
                    if(!golfie) { _fun00022_ip = 332; continue _fun00021 }
 225:
                    verify = _closure1_slot11;
                    option = _closure1_slot1;
                    backup = _closure1_slot2;
                    golfie = 17;
                    golfie = backup[golfie];
                    golfie = option.bind(entity)(golfie);
                    option = golfie.View;
                    golfie = {};
                    yankee = _closure2_slot14;
                    golfie['style'] = yankee;
                    romeon = _closure1_slot11;
                    yankee = _closure1_slot0;
                    offset = 28;
                    offset = backup[offset];
                    offset = yankee.bind(entity)(offset);
                    yankee = offset.ChevronSmallDownIcon;
                    offset = {};
                    backup = 'interactive-normal';
                    offset['color'] = backup;
                    foxtra = _closure2_slot8;
                    foxtra = foxtra.contextMenuIcon;
                    offset['style'] = foxtra;
                    offset = romeon.bind(entity)(yankee, offset);
                    golfie['children'] = offset;
                    report = verify.bind(entity)(option, golfie);
 332:
                    oscard[1] = report;
                    report = 'children';
                    michal[report] = oscard;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            kiloes['children'] = result;
            sizing = output.bind(tangon)(sizing, kiloes);
            kiloes = new Array(2);
            kiloes[0] = sizing;
            result = _closure1_slot11;
            output = _closure1_slot0;
            echoed = _closure1_slot2;
            sizing = 24;
            sizing = echoed[sizing];
            sizing = output.bind(tangon)(sizing);
            output = sizing.PressableOpacity;
            sizing = {};
            echoed = _closure1_slot14;
            echoed = echoed.APPS;
            echoed = source === echoed;
            if(!echoed) { _fun00010_ip = 1293; continue _fun00009 }
 1290:
            echoed = update;
 1293:
            sizing['disabled'] = echoed;
            echoed = function() { // Original name: onPress
                zuuluu = _closure2_slot7;
                michal = _closure2_slot15;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            sizing['onPress'] = echoed;
            source = _closure1_slot11;
            config = _closure1_slot0;
            ctrled = _closure1_slot2;
            echoed = 26;
            echoed = ctrled[echoed];
            echoed = config.bind(tangon)(echoed);
            update = echoed.Text;
            echoed = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            vacuum = ctrled[record];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            ctrled = ctrled[record];
            ctrled = config.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled./qG8v7;
            ctrled = vacuum.bind(sequen)(ctrled);
            echoed['children'] = ctrled;
            echoed = source.bind(tangon)(update, echoed);
            sizing['children'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            kiloes[1] = sizing;
            report['children'] = kiloes;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot11;
            golfie = _closure1_slot6;
            oscard = {};
            kiloes = backup.scrollView;
            oscard['style'] = kiloes;
            backup = backup.scrollViewContentContainer;
            oscard['contentContainerStyle'] = backup;
            oscard['horizontal'] = foxtra;
            oscard['showsHorizontalScrollIndicator'] = romeon;
            if(!yankee) { _fun00010_ip = 1508; continue _fun00009 }
 1481:
            romeon = [1, 2, 3, 4, 5];
            yankee = romeon.map;
            offset = function(argFoo, argBar) {
                report = _closure1_slot11;
                tangon = _closure1_slot16;
                zuuluu = undefined;
                michal = {};
                entity = argBar;
                entity = report.bind(zuuluu)(tangon, michal, entity);
                return entity;
            };
            verify = yankee.bind(romeon)(offset);
 1508:
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 1534:
            entity = null;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['SectionItemType'] = michal;
    return entity;
})();