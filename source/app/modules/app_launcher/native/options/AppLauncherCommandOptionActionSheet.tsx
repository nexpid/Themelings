// app/modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
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
    offset = 1;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.DEFAULT_CONTENT_PADDING;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    romeon = 5;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_SECONDARY;
    verify['backgroundColor'] = romeon;
    tangon['actionSheetBackground'] = verify;
    verify = {};
    romeon = 'transparent';
    verify['backgroundColor'] = romeon;
    tangon['titleContainer'] = verify;
    verify = {};
    romeon = 'center';
    verify['alignItems'] = romeon;
    tangon['titleWrapper'] = verify;
    verify = {'paddingHorizontal': 12, 'textAlign': 'center'};
    tangon['subtitleWrapper'] = verify;
    verify = {};
    verify['paddingHorizontal'] = yankee;
    verify['paddingTop'] = yankee;
    verify['flex'] = offset;
    tangon['contentContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AppLauncherCommandOptionActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = tangon.option;
            option = tangon.children;
            offset = tangon.contentContainerStyles;
            yankee = tangon.scrollable;
            report = undefined;
            if(!(yankee === report)) { _fun00002_ip = 36; continue _fun00001 }
 34:
            yankee = true;
 36:
            golfie = tangon.startExpanded;
            if(!(golfie === report)) { _fun00002_ip = 48; continue _fun00001 }
 46:
            golfie = true;
 48:
            zuuluu = {'option': 0, 'children': 0, 'contentContainerStyles': 0, 'scrollable': 0, 'startExpanded': 0};
            update = null;
            source = zuuluu;
            michal = silentSetPrototypeOf(source, update);
            source = {};
            update = tangon;
            echoed = zuuluu;
            oscard = copyDataProperties(source, update, echoed);
            var _closure2_slot0 = oscard;
            michal = _closure1_slot5;
            verify = michal.bind(report)();
            tangon = _closure1_slot4;
            sizing = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 6;
            michal = backup[michal];
            michal = sizing.bind(report)(michal);
            zuuluu = michal.BottomSheet;
            michal = {};
            source = michal;
            update = oscard;
            oscard = copyDataProperties(source, update);
            foxtra = verify.actionSheetBackground;
            oscard = 'backgroundStyles';
            michal[oscard] = foxtra;
            oscard = 'scrollable';
            michal[oscard] = yankee;
            oscard = 'startExpanded';
            michal[oscard] = golfie;
            oscard = 7;
            oscard = backup[oscard];
            oscard = sizing.bind(report)(oscard);
            yankee = oscard.BottomSheetTitleHeader;
            oscard = {};
            golfie = verify.titleContainer;
            oscard['titleContainerStyle'] = golfie;
            golfie = verify.titleWrapper;
            oscard['titleWrapperStyle'] = golfie;
            golfie = verify.subtitleWrapper;
            oscard['subtitleStyle'] = golfie;
            golfie = _closure1_slot3;
            foxtra = {};
            kiloes = {};
            result = 'flex-start';
            kiloes['alignSelf'] = result;
            foxtra['style'] = kiloes;
            kiloes = 8;
            kiloes = backup[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            sizing = kiloes.ActionSheetCloseButton;
            kiloes = {};
            output = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.onDismiss;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 68; continue _fun00003 }
 54:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.onDismiss;
                    michal = michal.bind(zuuluu)();
 68:
                    return entity;
                }
            };
            kiloes['onPress'] = output;
            kiloes = tangon.bind(report)(sizing, kiloes);
            foxtra['children'] = kiloes;
            foxtra = tangon.bind(report)(golfie, foxtra);
            oscard['leading'] = foxtra;
            foxtra = entity.displayName;
            oscard['title'] = foxtra;
            foxtra = entity.displayDescription;
            oscard['subtitle'] = foxtra;
            foxtra = _closure1_slot1;
            romeon = 10;
            romeon = backup[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            backup = 24;
            romeon['size'] = backup;
            romeon = tangon.bind(report)(foxtra, romeon);
            oscard['trailing'] = romeon;
            yankee = tangon.bind(report)(yankee, oscard);
            oscard = 'header';
            michal[oscard] = yankee;
            oscard = {};
            yankee = verify.contentContainer;
            verify = new Array(2);
            verify[0] = yankee;
            verify[1] = offset;
            oscard['style'] = verify;
            oscard['children'] = option;
            golfie = tangon.bind(report)(golfie, oscard);
            oscard = 'children';
            michal[oscard] = golfie;
            entity = entity.name;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        }
    };
    zuuluu['AppLauncherCommandOptionActionSheet'] = michal;
    return entity;
})();