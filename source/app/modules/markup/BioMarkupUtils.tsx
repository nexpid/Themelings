// app/modules/markup/BioMarkupUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    yankee = argBaz;
    verify = argCorge;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = yankee;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: getOrParseBioAST
        _fun71577: for(var _fun71577_ip = 0; ; ) switch(_fun71577_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot3;
            entity = mike.get;
            entity = entity.bind(mike)(report);
            mike = null;
            if(!(mike == entity)) { _fun71577_ip = 58; continue _fun71577 }
 26:
            oscar = _closure1_slot4;
            tango = undefined;
            mike = true;
            mike = oscar.bind(tango)(report, mike);
            tango = _closure1_slot3;
            zulu = tango.set;
            zulu = zulu.bind(tango)(report, mike);
            entity = mike;
 58:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, mike);
    mike = 0;
    oscar = options[mike];
    entity = undefined;
    golf = yankee.bind(entity)(oscar);
    oscar = 1;
    oscar = options[oscar];
    oscar = yankee.bind(entity)(oscar);
    offset = oscar.PROFILE_BIO_RULES;
    oscar = new Array(2);
    oscar[0] = offset;
    offset = 2;
    offset = options[offset];
    romeo = yankee.bind(entity)(offset);
    offset = {};
    foxtrot = false;
    offset['enableBuildOverrides'] = foxtrot;
    offset = romeo.bind(entity)(offset);
    oscar[1] = offset;
    foxtrot = golf.bind(entity)(oscar);
    var _closure1_slot2 = foxtrot;
    oscar = 3;
    oscar = options[oscar];
    offset = yankee.bind(entity)(oscar);
    oscar = {};
    golf = 2000;
    oscar['max'] = golf;
    golf = offset.prototype;
    golf = Object.create(golf, {constructor: {value: offset}});
    output = golf;
    sizing = oscar;
    oscar = new output[offset](sizing, kilo);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot3 = oscar;
    golf = 4;
    oscar = options[golf];
    offset = verify.bind(entity)(oscar);
    oscar = offset.reactParserFor;
    oscar = oscar.bind(offset)(foxtrot);
    offset = 5;
    offset = options[offset];
    romeo = yankee.bind(entity)(offset);
    offset = romeo.astParserFor;
    offset = offset.bind(romeo)(foxtrot);
    var _closure1_slot4 = offset;
    golf = options[golf];
    verify = verify.bind(entity)(golf);
    golf = verify.reactParserFor;
    mike = options[mike];
    offset = yankee.bind(entity)(mike);
    mike = 7;
    mike = options[mike];
    romeo = yankee.bind(entity)(mike);
    yankee = romeo.omit;
    mike = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'];
    yankee = yankee.bind(romeo)(foxtrot, mike);
    mike = new Array(2);
    mike[0] = yankee;
    yankee = {};
    romeo = {};
    foxtrot = function() { // Original name: react
        entity = null;
        return entity;
    };
    romeo['react'] = foxtrot;
    yankee['emoji'] = romeo;
    mike[1] = yankee;
    mike = offset.bind(entity)(mike);
    mike = golf.bind(verify)(mike);
    golf = 8;
    options = options[golf];
    golf = argBar;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = 'modules/markup/BioMarkupUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['parseBioReact'] = oscar;
    zulu['getOrParseBioAST'] = report;
    tango = function(argFoo) { // Original name: parseBioReactWithCachedAST
        _fun71579: for(var _fun71579_ip = 0; ; ) switch(_fun71579_ip) {
 0:
            tango = argFoo;
            entity = tango.trim;
            entity = entity.bind(tango)();
            mike = entity.length;
            entity = 0;
            if(!(entity !== mike)) { _fun71579_ip = 105; continue _fun71579 }
 24:
            mike = _closure1_slot5;
            zulu = undefined;
            mike = mike.bind(zulu)(tango);
            golf = _closure1_slot0;
            options = _closure1_slot1;
            oscar = 6;
            tango = options[oscar];
            report = golf.bind(zulu)(tango);
            tango = report.reactFor;
            oscar = options[oscar];
            options = golf.bind(zulu)(oscar);
            golf = options.ruleOutput;
            oscar = _closure1_slot2;
            entity = 'react';
            entity = golf.bind(options)(oscar, entity);
            entity = tango.bind(report)(entity);
            entity = entity.bind(zulu)(mike);
            return entity;
 105:
            entity = null;
            return entity;
        }
    };
    zulu['parseBioReactWithCachedAST'] = tango;
    zulu['parseBioReactWithoutScrolling'] = mike;
    return entity;
})();