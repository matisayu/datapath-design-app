import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import Constants from 'expo-constants';
import CollapsibleView from "@eliav2/react-native-collapsible-view";

import ToggleButton from './components/ToggleButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {

  return(
    <View style = {styles.container}>
      <ScrollView style = {styles.scrollViewStyle} vertical = {true} >
        <Text style = {styles.titleSwag}> Datapath Design Tutorial </Text>
          <CollapsibleView
              title={<Text style={styles.heading}>General Overview</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" }} >
                <Text style={styles.info}>
                  The primary intention of this tutorial is to educate you on how the
                  processor of your standard computer, phone, or tablet works.{'\n'}
                  {'\n'}
                  We will be evaluating datapath diagrams for several instructions that
                  the processor interprets, which will give you a basic understanding of
                  how to conceptualize the instructions at a micro-architectural level.
                  {'\n'}{'\n'}
                  Let's begin by trying to understand the responsibilities of the CPU (Central Processing Unit)
                  . At a basic level, the CPU’s primary job is to execute the instructions of a program. These 
                  programs can be anything from the operating system, your internet browser, or a videogame. 
                  {'\n'}{'\n'}
                  -The CPU consists of two primary sections, the datapath and the control.
                  {'\n'}{'\n'}
                  -Datapath is the set of hardware components that combine to execute an instruction.
                  {'\n'}{'\n'}
                  -Control is the set of signals that tell the datapath what to do.
                </Text>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Datapath Preview</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
            <Image style={styles.mainImage} source={require('./assets/DataPathEx.png')}/>

          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Datapath Elements</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
                
            <CollapsibleView 
              title={<Text style={styles.subHeading}>ALU</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style ={styles.info}>
                  -The ALU is the brain for logic operations within the CPU. It takes in two operands, and 
                  performs addition, subtraction, multiplication, or division depending on the given instruction.
                  {'\n'}{'\n'}
                  -The adder is a special type of ALU that only performs addition. This element is used when it is 
                  guaranteed this is the only logic operation needed.
                </Text>
                <Image style={styles.image} source={require('./assets/ALUAdder.png')}/>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Multiplexer</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  -The multiplexer is a selector that receives two inputs and selects one output depending on the incoming 
                  control signal. No logical operation is needed. This element is necessary in situations where two wires 
                  converge. The output is sent in binary form as a 1 or 0 depending on the opcode that the 
                  control unit receives.
                </Text>
                <Image style={styles.image} source={require('./assets/Multiplexer.png')}/>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Register File</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  -The register file is a set of 32 general purpose registers that temporarily hold data to allow for all 
                  processing. Registers do not actually store anything, they just delay the signal until the next cycle. 
                  Every clock tick, all registers are written and read. This is more efficient than traversing every register.
                  {'\n'}{'\n'}
                  -Besides the register file, there is also a program counter (the PC) which is a specialized register that 
                  holds the address of the current instruction being processed within the program sequence. This register is 
                  updated with the next instruction immediately following the fetch stage of instruction processing.
                  {'\n'}{'\n'}
                  -There is also a stack pointer (SP) that is irrelevant to the datapath diagram at this depth.
                </Text>
                <Image style={styles.image} source={require('./assets/RegisterFile.png')}/>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Instruction Memory</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  -The state elements are the instruction memory which only needs to provide read access because the datapath 
                  does not write instructions. Since instruction memory only reads, we can treat it as a combinational logic: 
                  hence the out at any time will always reflect the contents of the location specified by the address input, 
                  and no read control signal is needed. 
                </Text>
                <Image style={styles.image} source={require('./assets/InstructionMemory.png')}/>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Data Memory</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                Data memory is readable and writable memory. For example, the value that is written inside the PC can 
                come from one of the two adders(from ALU), the data that is written into the register file can come from 
                either the ALU or the data memory. The only way to know which way it goes, is to add a logical element to 
                steer the data in the right direction. And that of course is through the multiplexer. 
                The data memory MUST either read on a load OR written on a store. That is determined by the control signal 
                outputs that are read in the multiplexer beforehand.
                </Text>
                <Image style={styles.image} source={require('./assets/DataMemory.png')}/>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.subHeading}>Logic Gates</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text style = {styles.info}>
                  ........
                </Text>
                <Image style={styles.image} source={require('./assets/LogicGates.png')}/>
            </CollapsibleView>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Instruction Stages</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
                
            <CollapsibleView 
              title={<Text style={styles.subHeading}>Fetch</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text styles = {styles.info}>
                  -The easiest stage to understand, the fetch simply determines which instruction is called upon. 
                  {'\n'}
                  -Components Utilized: Adder ALU, 32-bit PC register, Instruction Memory (L1 I-Cache)
                </Text>
            </CollapsibleView>

            <CollapsibleView 
              title={<Text style={styles.subHeading}>Decode</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text styles = {styles.info}>
                -Decoding involves determining the opcode (opcode tells us which bits to send the register file, 
                need something to process the opcode before sending bits), extracting the register numbers, 
                then extracting the memory address, and fetched register operands
                </Text>
            </CollapsibleView>

            <CollapsibleView 
              title={<Text style={styles.subHeading}>Execution</Text>}
              style={ styles.subBorderSwag }
              arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                <Text styles = {styles.info}>
                  -This stage will read register values, perform the operation that is fetched, then write the 
                  result to the register. 
                  {'\n'}{'\n'}
                  -For load/store, the sequences are similar. It will read register operands, then calulate the address
                  using a 16-bit offset (sign-extend). The difference between the two is this, load will read memory and 
                  update the register while store will write the register value to memory. 
                  {'\n'}{'\n'}
                  -Components Utilized: Data memory, sign-extend, ALU arthimetic operator 
                </Text>
            </CollapsibleView>
          </CollapsibleView> 


          <CollapsibleView  
              title={<Text style={styles.heading}>Control Signals Overview</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>RegDst</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                      {'\n'}
                      - The register destination number for the Write register comes from the rt field
                      {'\n'}{'\n'}{'\n'}
                      Effect when asserted (1): 
                      {'\n'}
                      - The register destination number for the Write register comes from the rd field
                      {'\n'}
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>RegWrite</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                        {'\n'}
                        -  None.
                        {'\n'}{'\n'}{'\n'}
                        Effect when asserted (1): 
                        {'\n'}
                        - The register on the Write register input is written with the value on the Write data input.
                        {'\n'} 
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>ALUSrc</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                        {'\n'}
                        - The second ALU operand comes from the second register file output (Read data 2).
                        {'\n'}{'\n'}{'\n'}
                        Effect when asserted (1): 
                        {'\n'}
                        - The second ALU operand is the signextended, lower 16 bits of the instruction.
                        {'\n'}
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>MemWrite</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                        {'\n'}
                        - None.
                        {'\n'}{'\n'}{'\n'}
                        Effect when asserted (1): 
                        {'\n'}
                        - Data memory contents designated by the address input are replaced by the value on 
                        the Write data input.
                        {'\n'}
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>MemtoReg</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                        {'\n'}
                        - The value fed to the register Write data input comes from the data memory
                        {'\n'}{'\n'}{'\n'}
                        Effect when asserted (1): 
                        {'\n'}
                        - The value fed to the register Write data input comes from the ALU.
                        {'\n'}
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>MemRead</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                        {'\n'}
                        - None.
                        {'\n'}{'\n'}{'\n'}
                        Effect when asserted (1): 
                        {'\n'}
                        - Data memory contents designated by the address input are put on the Read data output
                        {'\n'}
                    </Text>
                </CollapsibleView>
                <CollapsibleView 
                  title={<Text style={styles.subHeading}>PC Src</Text>}
                  style={ styles.subBorderSwag }
                  arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <Text style = {styles.info}>
                      Effect when deasserted (0): 
                        {'\n'}
                        -  The PC is replaced by the output of the adder that computes the value of PC + 4.
                        {'\n'}{'\n'}{'\n'}
                        Effect when asserted (1): 
                        {'\n'}
                        - The PC is replaced by the output of the adder that computes the branch target
                        {'\n'}
                    </Text>
                </CollapsibleView>
          </CollapsibleView>


          <CollapsibleView  
              title={<Text style={styles.heading}>Instructions</Text>}
              style={ styles.borderSwag }
              arrowStyling={ { size: 36, rounded: true, thickness: 8, color: "dodgerblue" } }>

              <CollapsibleView title={<Text style={styles.subHeading}>ALU</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                  <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                    style={ styles.subBorderContent }
                    arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                      <Image style={styles.image} source={require('./assets/ExecutionALU.png')}/>
                      <Text styles = {styles.info}>
                        -The ALU instruction performs arithmetic operations such as addition or subtraction. 
                        It begins by reading two values from the register file. Afterwards, it performs the 
                        calculation then proceeds to write back the result. 
                        {'\n'}{'\n'}
                        -While the ALU instruction is being decoded, the first operand is placed into Read Register 1, 
                        while the second operand is placed into Read Register 2. The result is placed into the Write 
                        Register (on the register file) via the Write Data path shown on the diagram. 
                        {'\n'}{'\n'}
                        -Necessary datapath elements include the ALU and Instruction Memory. Conceptually, write 
                        back is also included. 
                      </Text>
                  </CollapsibleView>

                  <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                    style={ styles.subBorderContent }
                    arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                      <Image style={styles.image} source={require('./assets/ControlAlu.png')}/>
                      <Text styles = {styles.info}>
                        -RegDst is a 1, meaning we are using two source operands and the Write Register.
                        {'\n'}{'\n'}
                        -RegWrite is a 1, meaning the Write Register will be utilized.
                        {'\n'}{'\n'}
                        -ALUSrc is a 0 because the second operand comes from the second register file output.
                        {'\n'}{'\n'}
                        -MemWrite is a 0 because we are not utilizing data memory.
                        {'\n'}{'\n'}
                        -MemtoReg is a 1 because the value we are feeding into Write data comes from the ALU
                        {'\n'}{'\n'}
                        -MemRead is a 0 because we are not utilizing data memory.
                        {'\n'}{'\n'}
                        -PC Src is a 0 because we are using continuing to the next instruction by PC + 4 and not branch target.
                      </Text>
                  </CollapsibleView>
              </CollapsibleView>

              <CollapsibleView title={<Text style={styles.subHeading}>Load</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                    <CollapsibleView title ={<Text style={styles.subHeadingContent}>Execution</Text>}
                      style={ styles.subBorderContent }
                      arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                        <Image style={styles.image} source={require('./assets/ExecutionLoad.png')}/>
                        <Text styles = {styles.info}>
                          -The load instruction reads data from memory then writes that data into a register file. 
                          This means we only need one read register. The first operand is placed into Read Register 
                          1 from the register file. The second operand is placed in the Write Register. The low 
                          order bits from the instruction represent the offset that we send to the ALU  to add 
                          to the base register value.
                          {'\n'}{'\n'}
                          -Afterwards, we send the calculated address to the address port within data memory. 
                          We then extract the value from read data and place it in the Write Register via Write 
                          Data in the register file.
                          {'\n'}{'\n'}
                          -Necessary datapath elements include the register file, ALU, data memory, and sign extend.
                        </Text>
                    </CollapsibleView>

                    <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                      style={ styles.subBorderContent }
                      arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                        <Image style = {styles.image} source={require('./assets/ControlLoad.png')}/>
                        <Text styles = {styles.info}>
                          - RegDst is a 0 because we do not need to utilize Read Register 2 for operand 2. 
                          {'\n'}{'\n'}
                          - RegWrite is a 1 because we are using the Write Register in instruction memory.
                          {'\n'}{'\n'}
                          - ALUSrc is a 1 because the output from the ALU is the instruction offset.
                          {'\n'}{'\n'}
                          - MemWrite is a 0 because we are not writing to data memory.
                          {'\n'}{'\n'}
                          - MemtoReg is a 0 because the value we feed into the register file is coming from data memory.
                          {'\n'}{'\n'}
                          - MemRead is a 1 as we are reading data from data memory.
                          {'\n'}{'\n'}
                          - PC Src is sent a value but it is irrelevant to this instruction.
                        </Text>
                    </CollapsibleView>
              </CollapsibleView>

              <CollapsibleView title={<Text style={styles.subHeading}>Store</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                      <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                        style={ styles.subBorderContent }
                        arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                          <Image style={styles.image} source={require('./assets/ExecutionStore.png')}/>
                          <Text styles = {styles.info}>
                            -The store instruction writes a register value into memory. It begins by reading 
                            the first operand into Read Register 1 and the second operand into Read Register 
                            2. Similar to the load instruction, the offset is processed through sign extend 
                            and is sent to the ALU. The result is that the value from Read Register 1 is 
                            placed into the Write Data port of data memory. 
                            {'\n'}{'\n'}
                            -Necessary datapath elements include the register file, ALU, data memory, and sign extend.
                          </Text>
                      </CollapsibleView>

                      <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                        style={ styles.subBorderContent }
                        arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                          <Image style={styles.image} source={require('./assets/ControlStore.png')}/>
                          <Text styles = {styles.info}>
                            - RegDst is a 1 because we are using both operands for the read registers in instruction memory. 
                            {'\n'}{'\n'}
                            - RegWrite is a 0 because we are not writing to the register file
                            {'\n'}{'\n'}
                            - ALU Src is a 1 because the ALU second operand comes from the offset rather than from instruction
                             memory. 
                            {'\n'}{'\n'}
                            - MemWrite is a 1 because we are writing to data memory. 
                            {'\n'}{'\n'}
                            - MemtoReg is a 0 because we are feeding the value fed into the Write Data port of data memory.
                            {'\n'}{'\n'}
                            - MemRead is a 0 because we are not reading from data memory.
                            {'\n'}{'\n'}
                            - PC Src is a 1 because we must feed a value through it as a buffer.
                          </Text>
                      </CollapsibleView>
              </CollapsibleView>

              <CollapsibleView title={<Text style={styles.subHeading}>Branch</Text>}
                style={ styles.subBorderSwag }
                arrowStyling={ { size: 18, rounded: true, thickness: 4, color: "#E84855" } }>
                      <CollapsibleView title={<Text style={styles.subHeadingContent}>Execution</Text>}
                        style={ styles.subBorderContent }
                        arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                          <Image style={styles.image} source={require('./assets/ExecutionBranch.png')}/>
                          <Text styles = {styles.info}>
                            -The branch instruction will jump to a specific instruction if the orders of a condition 
                            are met. For example, the branch on equal instruction. This is done efficiently by 
                            subtracting one value from the other, then checking the output for zero using a condition code.
                            {'\n'}{'\n'}
                            -It begins by reading the first operand into Read Register 1, and the second operand into 
                            Read Register 2. Afterwards, the ALU subtracts the values from the read registers from 
                            one another, then checks the output for zero using a condition code.
                            {'\n'}{'\n'}
                            -If the output is zero, the ALU sets the zero bit to 1. This is counterintuitive, and 
                            a crucial piece of information. 
                            {'\n'}{'\n'}
                            -Afterwards, the target address of the branch instruction is calculated using the sign extend 
                            offset. Because 4 was still added to the program counter in the fetch stage, we need to 
                            shift left 2. The branch instruction is special in that we use an adder to combine the offset
                            with the value from the program counter. Therefore giving us the desired address.
                            {'\n'}{'\n'}
                            -Necessary datapath elements include the register file, sign extend, ALU, and the adder.
                          </Text>
                      </CollapsibleView>

                      <CollapsibleView title={<Text style={styles.subHeadingContent}>Control Signals</Text>}
                        style={ styles.subBorderContent }
                        arrowStyling={ { size: 12, rounded: true, thickness: 3, color: "#007513" } }>
                          <Image style={styles.image} source={require('./assets/ControlBranch.png')}/>
                          <Text styles = {styles.info}>
                            - RegWrite is a 0 because we are not writing to the register file  
                            {'\n'}{'\n'}
                            - RegDst is a 0 because we are using Read Register 2 to hold comparison value for the ALU
                            {'\n'}{'\n'}
                            - ALUSrc is a 0 because we are receiving the second operand into the ALU from the register 
                            file directly rather than the sign extend.
                            {'\n'}{'\n'}
                            - MemWrite is 0 because we are not writing to data memory.
                            {'\n'}{'\n'}
                            - MemtoReg is a 0 because we are not using data memory.
                            {'\n'}{'\n'}
                            - MemRead is a 0 because we are not reading from data memory.
                            {'\n'}{'\n'}
                            - PC Src is a 1 because we are using the adder and offset + shift left 2 to calculate the target 
                            address.
                          </Text>
                      </CollapsibleView>
              </CollapsibleView>

          
          </CollapsibleView>

        <Text> </Text>
        <Text style={styles.footer}>
          Created by Matt Faulk and Dakota Holmes
        </Text>
        <Text> </Text>
      </ScrollView> 
    </View>

  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {
   height: "100%",
   width: "100%",
  },

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#bb8ef5',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderSwag: { 
    borderWidth: 7, 
    backgroundColor: "#d4d4d4"
  },

  subBorderSwag: { 
    borderWidth: 4, 
    backgroundColor: "#bfbdbd" 
  },

  subBorderContent: { 
    borderWidth: 2,
    backgroundColor: "#f5f5f5"
  },
  
  heading: { 
    color: "black", 
    fontSize: 26, },

  subHeading: {
    color: "black", 
    fontSize: 19, },

  subHeadingContent: { 
    color: "black",
    fontSize: 15,
  },

  info: {
    margin: 24,
    fontSize: 18,
  },

  subcontainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },

  scrollnotif: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: windowHeight - 570,
  },

  titleSwag: {
    fontSize: 45,
    marginTop: 75,
    marginBottom: 20,
    textAlign: 'center',
    color: "black",
  },

  mainImage: {
    margin: 0,
    flex: 1,
    width: windowWidth - 10,
    height: windowHeight - 600,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },

  image: {
    margin: 0,
    flex: 1,
    width: 250,
    height: windowHeight - 600,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },

  footer: { 
      textAlign: "center"
  },

});
