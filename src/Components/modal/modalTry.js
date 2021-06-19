import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'

// function Example() {
//     const [show, setShow] = useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setShow(true)}>
//                 Custom Width Modal
//         </Button>

//             <Modal
//                 show={show}
//                 onHide={() => setShow(false)}
//                 dialogClassName="modalYY"
//                 aria-labelledby="example-custom-modal-styling-title"
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="example-custom-modal-styling-title">
//                         Custom Modal Styling
//             </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>
//                         Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
//                         commodi aspernatur enim, consectetur. Cumque deleniti temporibus
//                         ipsam atque a dolores quisquam quisquam adipisci possimus
//                         laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
//                         accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
//                         reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
//                         deleniti rem!
//             </p>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }

// export default Example;

export default function Example() {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content




          <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Order Number</th>
                                <th>Order Date</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-toggle="collapse" data-target=".order1">
                                <td>&gt;</td>
                                <td>1001</td>
                                <td>9/29/2016</td>
                                <td>$126.27</td>
                            </tr>
                            <tr class="collapse order1">
                                <td>1</td>
                                <td></td>
                                <td>Shirt</td>
                                <td>$12.27</td>
                            </tr>
                            <tr class="collapse order1">
                                <td>1</td>
                                <td></td>
                                <td>Shoes</td>
                                <td>$62.27</td>
                            </tr>
                            <tr data-toggle="collapse" data-target=".order1">
                                <td>&gt;</td>
                                <td>1002</td>
                                <td>9/27/2016</td>
                                <td>$92.15</td>
                            </tr>
                            <tr class="collapse order1">
                                <td>2</td>
                                <td></td>
                                <td>Item</td>
                                <td>$12.27</td>
                            </tr>
                            <tr class="collapse order1">
                                <td>2</td>
                                <td></td>
                                <td>Item</td>
                                <td>$62.27</td>
                            </tr>
                            <tr>
                                <td>&gt;</td>
                                <td>1003</td>
                                <td>9/01/2016</td>
                                <td>$23.55</td>
                            </tr>
                        </tbody>
                    </table>

                </Modal.Body>
            </Modal>
        </>
    );
}

//   render(<Example />);